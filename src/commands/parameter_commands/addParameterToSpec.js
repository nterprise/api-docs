const {folders} = require('../../folders');
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
            '')}/parameters/${schemaFile}`);

    _.set(
        openAPI,
        `components.parameters.${schemaName}`,
        {
            '$ref': `.${refFile}`,
        },
    );
};

const parametersFolder = (base, dir = '') => {
    const fullPath = path.normalize(`${base}/${dir}`);
    const files = fs.readdirSync(fullPath);
    return files.map((file) => {
        const stats = fs.statSync(`${fullPath}/${file}`);
        if (stats.isDirectory()) {
            return parametersFolder(fullPath, file);
        }
        return stats.isFile() ? `${dir}/${file}` : null;
    });
};

exports.command = 'add-spec';
exports.describe = 'Adds the parameters to the open api spec';

exports.handler = async (argv) => {
    let parameters = parametersFolder(folders.parametersPath);
    parameters = _.compact(_.uniq(_.flatten(parameters)));
    logger.debug('parameters to process', parameters);

    const openApi = require(folders.openApiDoc);
    if (argv.clear) {
        _.unset(openApi, 'components.parameters');
    }

    parameters.map(_.partial(
        addSchema,
        openApi,
    ));

    logger.debug('New parameters', _.get(openApi, 'parameters'));
    openApi.components = sortObjectKeys(openApi.components);

    fs.writeFileSync(folders.openApiDoc, JSON.stringify(openApi, null, 2));
    logger.info('Updated spec with new parameters');
};
