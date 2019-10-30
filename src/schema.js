const _ = require('lodash');
const {folders} = require('./folders');
const {logger} = require('@nterprise/common-js');
const fs = require('fs');

module.exports.isCallable = (schemaDef) => _.get(
    schemaDef,
    'x-nter-callable',
    false
);

module.exports.loadSchema = (schema) => {
    schema = schema.replace('.json', '');

    const schemaFile = `${schema}.json`;
    if (!fs.existsSync(`${folders.schemas}/${schemaFile}`)) {
        logger.error(`Schema file not found`);
    }

    return require(`${folders.schemas}/${schemaFile}`);
}
