const {logger} = require('@nterprise/common-js');
const fs = require('fs');
const {folders} = require('../../folders');
const _ = require('lodash');
const {isCallable, loadSchema} = require('../../schema');

exports.command = 'all';
exports.describe = 'Generates responses for all schemas';

exports.handler = async (argv) => {
    logger.info('Creating all responses');

    const files = fs.readdirSync(folders.schemas);

    logger.debug('Schema files found', files);
    const full = require('./generateFullResponse').handler;
    const schemas = _.compact(_.map(files, (file) => {
        try {
            const stats = fs.statSync(`${folders.schemas}/${file}`);
            if (!stats.isFile()) {
                return;
            }

            const schema = loadSchema(file);
            if (!isCallable(schema)) {
                return null;
            }

            const relation = _.get(schema, 'x-nter-relation', null);
            if (!relation) {
                return null;
            }

            const fullArgs = _.clone(argv);
            fullArgs.schema = file.replace('.json', '');
            fullArgs.relation = relation;
            // We dont need to write all the time
            fullArgs.updateSpec = false;
            fullArgs._schemaDef = schema;
            return full(fullArgs);
        } catch (error) {
            logger.warn(`Failed to load schema ${file}`, error);
        }
    }));

    await Promise.all(schemas);

    if (argv.updateSpec) {
        const specUpdate = require('./addResponseToSpec').handler;
        await specUpdate(argv);
    }

    logger.info('Created all responses');
};
