const {isCallable} = require('../schema');
const {logger} = require('@nterprise/common-js');
const yargs = require('yargs');

module.exports = (argv) => {
    if (argv.schema === '__all__') {
        return;
    }

    if (argv.force) {
        return;
    }

    if (!isCallable(argv._schemaDef)) {
        logger.error('Schema is not marked as callable in the API');
        yargs.exit(5);
    }
};
