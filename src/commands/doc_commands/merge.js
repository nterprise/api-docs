const {folders} = require('../../folders');
const glob = require('glob');
const _ = require('lodash');
const RefParser = require('json-schema-ref-parser');
const fs = require('fs');
const path = require('path');
const removeKeys = [
    '$schema',
    '$id',
    '$comment',
];

/**
 *
 * @param {String[]} type
 * @return {{type: *}}
 */
const fixType = (type) => {
    // If we have a type and null then add nullable
    if (type.length === 2 && _.includes(type, 'null')) {
        return {
            type: _.omit(type, 'null')[0],
            nullable: true,
        };
    }

    // Return the type
    return {type: _.omit(type, 'null')[0]};
};

exports.builder = (yargs) => yargs.
    defaults('overwrite', true);

exports.command = 'merge';
exports.describe = 'Merge all OAS docs';

const apiToPath = {
    niagara: folders.v2Path,
    caapi: folders.v1Path,
    auth: folders.authPath,
};

let inputFilter = null;
const models = {};
const modelsInFile = {};
exports.handler = async (argv) => {
    const logger = argv.logger;
    logger.info('Merge OAS files');
    logger.info('argv', argv);
    const localResolver = {
        order: 1,

        canRead: true,

        read(file, callback, $refs) {
            if (!_.startsWith(file.url, 'http')) {
                callback(null, require(file.url));
                return;
            }

            file = new URL(file.url);
            const localPath = path.join(...[
                folders.jekyllPath,
                file.pathname,
            ]);

            logger.debug(`Local path: ${localPath}`);
            try {
                const data = require(localPath);
                callback(null, data);
            } catch (error) {
                logger.error(`Failed to load file ${localPath}`, error);
                throw error;
            }
        },
    };

    const mergeAllOf = (allOf, spec) => _.reduce(
        allOf,
        (merged, value) => {
            _.unset(merged, 'allOf');
            return _.merge(merged, value);
        },
        spec,
    );

    const jsonSchemaToOas = (logger, file, spec) => _.reduce(
        spec,
        (fixed, value, key) => {
            const modelName = _.get(value, 'x-model', null);

            if (modelName) {
                _.set(
                    modelsInFile,
                    path.basename(file).replace('.json', ''),
                    [
                        modelName,
                        ..._.get(
                            modelsInFile,
                            path.basename(file).replace('.json', ''),
                            [],
                        ),
                    ],
                );

                if (!_.has(modelName, modelName)) {
                    _.set(
                        models,
                        modelName,
                        jsonSchemaToOas(
                            logger,
                            file,
                            value,
                        ),
                    );
                }

                _.set(
                    fixed,
                    key,
                    {'$ref': `#/components/schemas/${modelName}`},
                );
                return fixed;
            }

            const hasNullType = _.filter(value, {type: 'null'}).length !== 0;
            if (key === 'oneOf' && value.length === 2 && hasNullType) {
                fixed = _.head(_.filter(value, {type: 'object'}));
                _.set(
                    fixed,
                    'nullable',
                    true,
                );
                fixed = jsonSchemaToOas(
                    logger,
                    file,
                    fixed,
                );
                return fixed;
            }

            if (key === 'example') {
                return fixed;
            }

            if (key === 'required' && _.isArray(value)) {
                return fixed;
            }

            if (_.startsWith(key, 'x-')) {
                return fixed;
            }

            if (key === 'patternProperties') {
                _.set(fixed, 'x-patternProperties', value);
                return fixed;
            }

            if (key === 'type' && _.isArray(value)) {
                fixed = {
                    ...fixed,
                    ...fixType(value),
                };
                return fixed;
            }

            if (key === 'examples') {
                key = 'example';
                value = value[0];
            }

            if (_.isArray(value)) {
                _.set(
                    fixed,
                    key,
                    _.map(
                        value,
                        (child) => _.isObject(child)
                            ? jsonSchemaToOas(logger, file, child)
                            // If this is an array then something is wrong
                            : child,
                    ),
                );
                return fixed;
            }

            if (_.isObject(value)) {
                value = jsonSchemaToOas(logger, file, value);
                _.set(fixed, key, value);
                return fixed;
            }

            if (_.includes(removeKeys, key)) {
                return fixed;
            }

            if (key === 'const') {
                key = 'enum';
                value = [value];
            }

            _.set(fixed, key, value);
            return fixed;
        },
        {},
    );

    const apis = argv.api
        ? _.flatten([argv.api])
        : ['auth', 'caapi', 'niagara'];

    logger.debug('API to process', apis);
    const files = _.flatten(
        _.map(
            apis,
            (api) => glob.sync(`${apiToPath[api]}/oas_*.json`),
        ),
    );

    logger.debug('Files to process', files);

    if (files.length < 1) {
        logger.error('No files to process');
        process.exit(1);
    }

    const specs = await Promise.all(_.map(
        files,
        async (file) => {
            logger.debug(`setting CWD to ${path.dirname(file)}`);
            process.chdir(path.dirname(file));
            logger.debug('De-referencing file');
            const deRefed = await RefParser.dereference(
                require(file),
                {resolve: {local: localResolver}},
            );

            return [jsonSchemaToOas(logger, file, deRefed), file];
        },
    ));

    const merged = _.reduce(
        specs,
        (merged, [spec, file]) => {
            _.reduce(
                _.uniq(modelsInFile[path.basename(file).replace('.json', '')]).
                    sort(),
                (schemas, model) => {
                    _.set(
                        schemas,
                        model,
                        _.get(models, model),
                    );
                    return schemas;
                },
                {},
            );

            _.set(
                spec,
                'components.schemas',
                models,
            );

            if (inputFilter) {
                _.set(
                    spec,
                    'components.schemas.InputFilter',
                    inputFilter,
                );
            }

            // Copy the de-referenced OAS File
            argv._writeFile(
                `${folders.jekyllPath}/api/niagara/${path.basename(file)}`,
                JSON.stringify(spec, null, 2),
            );
            _.merge(merged, spec);
            return merged;
        },
        {},
    );

    argv._writeFile(
        `${folders.jekyllPath}/api/niagara/oas_niagara.json`,
        JSON.stringify(merged, null, 2),
    );

    logger.info('Converted OAS files to markdown');
};
