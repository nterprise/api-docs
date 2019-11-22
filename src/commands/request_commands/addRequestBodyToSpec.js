const {folders, recurseFolder} = require('../../folders');
const {sortObjectKeys} = require('../../sortObjectKeys');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const addSchema = (openAPI, schemaFile) => {
    const schemaName = _.camelCase(schemaFile.replace('.json', ''));
    // eslint-disable-next-line max-len
    const refFile = path.normalize(
        `${folders.componentsPath.replace(folders.v2Path,
            '')}/requestBodies/${schemaFile}`);

    _.set(
        openAPI,
        `components.requestBodies.${schemaName}`,
        {
            '$ref': `.${refFile}`,
        },
    );
};

exports.command = 'add-spec';
exports.describe = 'Adds the requestBodies to the open api spec';

exports.handler = async (argv) => {
    let requestBodies = recurseFolder(folders.requestBodies);
    requestBodies = _.compact(_.uniq(_.flatten(requestBodies)));
    logger.debug('requestBodies to process', requestBodies);

    const openApi = require(folders.openApiDoc);
    if (argv.clear) {
        _.unset(openApi, 'components.requestBodies');
    }

    requestBodies.map(_.partial(
        addSchema,
        openApi,
    ));

    logger.debug('New requestBodies', _.get(openApi, 'requestBodies'));
    openApi.components = sortObjectKeys(openApi.components);

    fs.writeFileSync(folders.openApiDoc, JSON.stringify(openApi, null, 2));
    logger.info('Updated spec with new requestBodies');
};
