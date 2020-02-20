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
    verbose: true,
    debug: true,
    language_tabs: '',
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

    const apis = _.flatten([argv.api]);

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
            logger.info(`Converting OAS ${file} to markdown`);
            logger.debug(`setting CWD to ${path.dirname(file)}`);
            process.chdir(path.dirname(file));
            logger.debug('Dereferencing file');
            const schema = await RefParser.dereference(require(file));
            logger.debug('Running widdershins on schema');

            const newFile = path.join(
                folders.jekyllPath,
                _.get(schema, 'x-api'),
                path.basename(file).replace('.json', '.md'),
            );
            logger.debug(`Saving markdown to ${newFile}`);
            converter.convert(schema, widdershinsOptions, (err, str) => {
                if (err) {
                    logger.error('Failed to convert file', err);
                    return;
                }
                const parts = [
                    '---',
                    'layout: page',
                    `parent: ${_.get(schema, 'x-parent')}`,
                    `nav_order: ${index}`,
                    ...str.split('\n').slice(1),
                ];

                fs.writeFileSync(newFile, parts.join('\n'));
                logger.debug('File converted');
            });
        },
        [],
    ));

    logger.info('Converted OAS files to markdown');
};
