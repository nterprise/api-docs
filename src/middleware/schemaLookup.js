const {loadSchema} = require('../schema');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');

module.exports = (argv) => {
    if (argv.schema === '__all__') {
        return;
    }

    const schema = loadSchema(argv.schema);
    logger.debug('Found Schema', schema);
    const schemaRelation = _.camelCase(
        _.get(schema, 'x-nter-relation', null),
    );

    const relation = _.camelCase(
        _.get(argv, 'relation', schemaRelation),
    );

    logger.debug(`Found relation ${relation}`);
    if (!relation) {
        logger.error(
            // eslint-disable-next-line max-len
            'Cannot generate a response without knowing the relation for this schema',
        );
        return;
    }

    argv.relation = relation;
    argv._schemaDef = schema;
};
