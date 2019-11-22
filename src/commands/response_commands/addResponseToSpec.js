const {folders, recurseFolder} = require('../../folders');
const {sortObjectKeys} = require('../../sortObjectKeys');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const addResponse = (openAPI, schemaFile) => {
    const schemaName = _.camelCase(schemaFile.replace('.json', ''));
    // eslint-disable-next-line max-len
    const refFile = path.normalize(
        `${folders.responses.replace(folders.v2Path, '')}/${schemaFile}`);
    _.set(
        openAPI,
        `components.responses.${schemaName}`,
        {
            '$ref': `.${refFile}`,
        },
    );
};

exports.command = 'add [schema]';
exports.describe = 'Adds the response to the open api spec';

exports.handler = async (argv) => {
    let schemas = [];
    if (argv.schema === '__all__') {
        logger.info('Adding all response to the spec');
        schemas = recurseFolder(folders.responses);
    }

    schemas.push(argv.schema === '__all__' ? null : `${argv.schema}.json`);
    schemas = _.compact(_.uniq(_.flatten(schemas)));
    logger.debug('Schemas to process', schemas);

    const openApi = require(folders.openApiDoc);
    if (argv.clear) {
        _.unset(openApi, 'components.responses');
    }

    schemas.map(_.partial(
        addResponse,
        openApi,
    ));

    logger.debug('New responses', _.get(openApi, 'responses'));
    openApi.components = sortObjectKeys(openApi.components);
    fs.writeFileSync(folders.openApiDoc, JSON.stringify(openApi, null, 2));
    logger.info('Updated spec with new responses');
};
