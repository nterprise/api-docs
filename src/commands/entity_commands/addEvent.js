const {folders} = require('../../folders');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');

exports.builder = (yargs) => yargs.
    coerce(['event'], _.toLower).
    defaults('overwrite', true);

exports.command = 'add-event [entity]';
exports.describe = 'Adds a new entity';

exports.handler = async (argv) => {
    logger.info('Adding entity events');
    const helperFileName = `${folders.schemas}/entityHelper.json`;
    const helper = require(helperFileName);
    const types = _.get(helper, 'properties.entity_type.enum');

    let events = [];
    _.map(types, (type) => {
        events = [
            ..._.map(
                [
                    'created',
                    'updated',
                    'deleted',
                    'removed',
                    'attached',
                    'detached',
                ],
                (event) => `${type}.${event}`),
            ...events,
        ];
    });

    events.sort();
    _.set(helper, 'properties.entity_events.enum', _.uniq(events));
    argv._writeFile(
        helperFileName,
        JSON.stringify(helper, null, 2),
    );
    logger.info('Entity added');
};
