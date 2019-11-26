const {folders} = require('../../folders');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');

exports.builder = (yargs) => yargs.
    coerce(['entity'], _.toUpper).
    defaults('overwrite', true).
    check((argv) => {
        return argv.entity && argv.entity.length < 5;
    });

exports.command = 'add <entity>';
exports.describe = 'Adds a new entity';

exports.handler = async (argv) => {
    logger.info('Adding entity');
    const helperFileName = `${folders.schemas}/entityHelper.json`;
    const helper = require(`${folders.schemas}/entityHelper.json`);
    const types = _.get(helper, 'properties.entity_type.enum');

    types.push(argv.entity);
    types.sort();
    _.set(helper, 'properties.entity_type.enum', _.uniq(types));
    argv._writeFile(
        helperFileName,
        JSON.stringify(helper, null, 2),
    );
    logger.info('Entity added');
};
