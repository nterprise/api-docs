const {folders} = require('../../folders');
const {sortObjectKeys} = require('../../sortObjectKeys');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const addSchema = (openAPI, schemaFile) => {
    // eslint-disable-next-line max-len
    const schemaName =_.upperFirst(_.camelCase(schemaFile.replace('.json', '')));
    // eslint-disable-next-line max-len
    const refFile = path.normalize(`${folders.componentsPath.replace(folders.v2Path, '')}/schemas/${schemaFile}`);

    _.set(
        openAPI,
        `components.schemas.${schemaName}`,
        {
            '$ref': `.${refFile}`,
        },
    );
};

const schemaFolder = (base, dir = '') => {
    const fullPath = path.normalize(`${base}/${dir}`);
    const files = fs.readdirSync(fullPath);
    return files.map((file) => {
        const stats = fs.statSync(`${fullPath}/${file}`);
        return stats.isFile() ? `${dir}/${file}` : null;
    });
};

exports.command = 'add-spec';
exports.describe = 'Adds the schema to the open api spec';

exports.handler = async (argv) => {
    let schemas = schemaFolder(folders.schemas);
    schemas = _.compact(_.uniq(_.flatten(schemas)));
    logger.debug('Schemas to process', schemas);

    const openApi = require(folders.openApiDoc);
    if (argv.clear) {
        _.unset(openApi, 'components.schemas');
    }

    schemas.map(_.partial(
        addSchema,
        openApi,
    ));

    logger.debug('New schemas', _.get(openApi, 'schemas'));
    openApi.components = sortObjectKeys(openApi.components);
    fs.writeFileSync(folders.openApiDoc, JSON.stringify(openApi, null, 2));
    logger.info('Updated spec with new schemas');
};