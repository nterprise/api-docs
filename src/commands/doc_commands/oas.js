const {folders} = require('../../folders');
const glob = require('glob');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const RefParser = require('json-schema-ref-parser');
const converter = require('widdershins');
const jp = require('jsonpath');
const Ajv = require('ajv');
const ajv = new Ajv({
    allErrors: true,
});
const yaml = require('yaml');

const widdershinsOptions = {
    user_templates: `${folders.templatePath}/openapi3`,
    codeSamples: false,
    httpsnippet: false,
    yaml: true,
    lang: false,
    omitBody: true,
    omitHeader: true,
    expandBody: true,
    shallowSchemas: true,
    verbose: false,
    debug: false,
    language_tabs: '',
};

const removeKeys = [
    '$schema',
    '$id',
    '$comment',
];

const fontMatterMapping = [
    {
        apiKey: 'x-nter-docs-parent',
        fontMatterKey: 'parent',
    },
    {
        apiKey: 'x-nter-docs-nav-order',
        fontMatterKey: 'nav_order',
    },
    {
        apiKey: 'x-nter-docs-has-children',
        fontMatterKey: 'has_children',
    },
    {
        apiKey: 'x-nter-docs-grand-parent',
        fontMatterKey: 'grand_parent',
    },
    {
        apiKey: 'x-nter-docs-redirect-from',
        fontMatterKey: 'redirect_from',
    },
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
        if (_.startsWith(key, 'x-nter-docs')) {
            _.set(fixed, key, value);
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

const oasToJsonSchema = (spec) => _.reduce(
    spec,
    (fixed, value, key) => {
        if (_.startsWith(key, 'x-nter')) {
            _.unset(fixed, key);
            return fixed;
        }

        if (_.startsWith(key, 'x-')) {
            _.set(fixed, `${key.replace('x-', '')}`, value);
            return fixed;
        }

        if (key === 'nullable' && value) {
            _.set(fixed, 'type', [_.get(fixed, 'type'), 'null']);
            _.unset(fixed, 'nullable');
            return fixed;
        }

        if (_.isArray(value)) {
            _.set(
                fixed,
                key,
                _.map(
                    value,
                    (child) => _.isObject(child)
                        ? oasToJsonSchema(child)
                        // If this is an array then something is wrong
                        : child,
                ),
            );
            return fixed;
        }

        if (_.isObject(value)) {
            value = oasToJsonSchema(value);
            _.set(fixed, key, value);
            return fixed;
        }

        _.set(fixed, key, value);
        return fixed;
    },
    {},
);

const buildFontMatter = (oas) => _.reduce(
    fontMatterMapping,
    (fontMatter, {apiKey, fontMatterKey}) => {
        if (_.has(oas, apiKey)) {
            _.set(fontMatter, fontMatterKey, _.get(oas, apiKey));
        }
        return fontMatter;
    },
    {layout: 'page'},
);

const localResolver = {
    order: 1,

    canRead: true,

    read(file, callback, $refs) {
        try {
            if (!_.startsWith(file.url, 'http')) {
                callback(null, require(file.url));
                return;
            }

            file = new URL(file.url);
            callback(null, require(path.join(...[
                folders.jekyllPath,
                file.pathname,
            ])));
        } catch (error) {
            logger.error('Error when loading local ref', error);
        }
    },
};

const processFile = async (file, {validateExample=false}) => {
    const result = {
        fileName: file,
        error: false,
        errorMessage: null,
        oas: null,
        markdown: null,
    };

    logger.info(`Converting OAS ${file} to markdown`);
    logger.debug(`setting CWD to ${path.dirname(file)}`);
    process.chdir(path.dirname(file));
    logger.debug('De-referencing file');
    try {
        const deRefed = await RefParser.dereference(
            require(file),
            {resolve: {local: localResolver}},
        );
        result.oas = jsonSchemaToOas(deRefed);
    } catch (error) {
        logger.error(`Failed to de-reference file ${file}`, error);
        result.error = true;
        result.errorMessage = error.message;
        return result;
    }

    logger.debug('Running widdershins on schema');

    // now that we have a de-reference OAS schema,
    // check that the request schemas have valid examples
    const schemas = [
        ...jp.nodes(
            result.oas,
            '$..responses.*.content.*',
        ),
    ];

    const schemasOk = _.omitBy(
        _.map(
            schemas,
            ({path, value}) => {
                if (!validateExample) {
                    return;
                }

                if (!_.has(value, 'example')) {
                    result.error = true;
                    // eslint-disable-next-line max-len
                    result.errorMessage = `Path: ${path.join(
                        '.')} is missing example`;
                }

                const contentType = path[path.length - 1];
                if (contentType === 'application/hal+json') {
                    _.set(
                        value,
                        'schema.required',
                        _.uniq([
                            '_links',
                            ..._.get(value, 'schema.required', []),
                        ]),
                    );
                }

                // Validate the example matches the schema
                const jsonSchema = oasToJsonSchema(_.cloneDeep(value.schema));
                const validate = ajv.compile(jsonSchema);
                const valid = validate(value.example);

                if (!valid) {
                    result.error = true;
                    result.errorMessage = `Example at Path: ${path.join('.')} `
                        + `is not valid: `
                        + JSON.stringify(validate.errors, null, 2);
                }
            },
        ),
        _.isNil,
    );

    if (_.keys(schemasOk).length) {
        result.error = true;
        throw new Error(_.reduce(
            schemasOk,
            (result, value) => '' + result + '\n' + value,
            `There are error(s) processing ${file}: \n`,
        ));
    }

    logger.debug(`Converting to markdown`);
    const markdown = await converter.convert(result.oas, widdershinsOptions);

    logger.debug(`Creating font matter`);
    const fontMatter = buildFontMatter(result.oas);

    _.set(fontMatter, 'title', _.get(result.oas, 'info.title'));

    result.markdown = `---\n${yaml.stringify(fontMatter)}---\n${markdown}`;
    logger.debug('File processed');
    return result;
};

exports.builder = (yargs) => yargs.
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

    const apis = argv.api ? _.flatten([argv.api]) : ['auth', 'caapi', 'niagara'];
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

            if (_.endsWith('oas_niagara.json')) {
                logger.debug('Skipping Niagara');
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

    const processedFiles = await Promise.all(_.map(files, processFile));

    const errors = _.filter(processedFiles, {error: true});

    if (errors.length) {
        _.map(
            errors,
            (error) => logger.error(
                `File ${error.fileName} contained Error: ${error.errorMessage}`,
            ),
        );
        process.exit(5);
        return;
    }

    _.forEach(processedFiles, (result) => {
        const schemaFile = path.join(
            folders.jekyllPath,
            'api',
            _.get(result.oas, 'x-api'),
            path.basename(result.fileName),
        );

        // Copy the de-referenced OAS File
        argv._writeFile(
            schemaFile,
            JSON.stringify(result.oas, null, 2),
        );

        // Write the markdown
        argv._writeFile(
            schemaFile.replace('.json', '.md'),
            result.markdown,
        );
    });

    logger.info('Converted OAS files to markdown');
};
