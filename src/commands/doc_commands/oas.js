const {folders} = require('../../folders');
const glob = require('glob');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const RefParser = require('json-schema-ref-parser');
const converter = require('widdershins');

const widdershinsOptions = {
    user_templates: `${folders.templatePath}/openapi3`,
    codeSamples: false,
    httpsnippet: false,
    yaml: true,
    lang: false,
    omitBody: true,
    verbose: false,
    debug: false,
    language_tabs: '',
};

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

const jsonSchemaToOas = (spec) => _.reduce(
    spec,
    (fixed, value, key) => {
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

        if (_.isArray(value)) {
            _.set(
                fixed,
                key,
                _.map(
                    value,
                    (child) => _.isObject(child)
                        ? jsonSchemaToOas(child)
                        // If this is an array then something is wrong
                        : child,
                ),
            );
            return fixed;
        }

        if (_.isObject(value)) {
            value = jsonSchemaToOas(value);
            _.set(fixed, key, value);
            return fixed;
        }

        if (_.includes(removeKeys, key)) {
            logger.debug(`Removing ${key}`);
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

exports.builder = (yargs) => yargs.
    option(
        'merge',
        {
            describe: 'Merge all OAS files',
            default: false,
            global: true,
            boolean: true,
        },
    ).
    defaults('overwrite', true);

exports.command = 'oas [file]';
exports.describe = 'Generate Markdown from Open API';
exports.builder = (yargs) => {
    return yargs.
        describe(
            'file',
            'Choose which OAS file to use. Can be relative to api folder. '
            + 'Leave blank for all files',
        ).
        defaults('file', '__all');
};

const apiToPath = {
    niagara: folders.v2Path,
    caapi: folders.v1Path,
    auth: folders.authPath,
};

exports.handler = async (argv) => {
    logger.info('Generating pages from OAS');
    logger.info('argv', argv);
    logger.debug(`${widdershinsOptions.user_templates}`);

    const apis = _.flatten([argv.api]);
    let masterSchema = {};
    logger.debug('API to process', apis);
    const files = _.reduce(
        [argv.file],
        (files, file) => {
            if (file === '__all') {
                logger.debug(`Processing all files for ${_.join(apis, ', ')}`);
                logger.debug(`Glob pattern ${folders.v2Path}/oas_*.json`);
                files = _.flatten(
                    _.map(
                        apis,
                        (api) => glob.sync(`${apiToPath[api]}/oas_*.json`),
                    ),
                );
                return files;
            }

            if (!fs.existsSync(file)) {
                logger.warn(`Invalid file ${file}`);
                return files;
            }

            files.push(path.resolve(file));
            return files;
        },
        [],
    );

    logger.debug('Files to process', files);
    if (files.length < 1) {
        logger.error('No files to process');
        process.exit(1);
    }

    await Promise.all(_.map(
        files,
        async (file, index) => {
            if (path.basename(file) === 'oas_niagara.json') {
                logger.debug('Skipping Niagara');
                return;
            }
            logger.info(`Converting OAS ${file} to markdown`);
            logger.debug(`setting CWD to ${path.dirname(file)}`);
            process.chdir(path.dirname(file));
            logger.debug('Dereferencing file');
            let oas;
            try {
                oas = jsonSchemaToOas(
                    await RefParser.dereference(require(file)),
                );
                masterSchema = {
                    ...masterSchema,
                    ...oas,
                };
            } catch (error) {
                logger.error(`Failed to process file ${file}`, error);
                return;
            }

            logger.debug('Running widdershins on schema');

            const schemaFile = path.join(
                folders.jekyllPath,
                'api',
                _.get(oas, 'x-api'),
                path.basename(file),
            );

            argv._writeFile(
                schemaFile,
                JSON.stringify(oas, null, 2),
            );

            logger.debug(`Saving markdown to ${schemaFile}`);
            converter.convert(oas, widdershinsOptions, (err, str) => {
                if (err) {
                    logger.error('Failed to convert file', err);
                    return;
                }
                const parts = [
                    '---',
                    'layout: page',
                    `parent: ${_.get(oas, 'x-parent')}`,
                    `nav_order: ${index}`,
                    ...str.split('\n').slice(1),
                ];

                argv._writeFile(
                    schemaFile.replace('.json', '.md'),
                    parts.join('\n'),
                );
                logger.debug('File converted');
            });
        },
        [],
    ));

    if (argv.merge) {
        logger.info('Writing merged OAS file');
        argv._writeFile(
            `${folders.v2Path}/oas_niagara.json`,
            JSON.stringify(masterSchema, null, 2),
        );
    }

    logger.info('Converted OAS files to markdown');
};
