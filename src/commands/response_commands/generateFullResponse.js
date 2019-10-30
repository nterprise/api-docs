const {logger} = require('@nterprise/common-js');

exports.command = 'full <schema>';
exports.describe = 'Creates a paged and entity along with links';
exports.handler = async (argv) => {
    logger.info('Creating response');

    const link = require('./generateResponseLink').handler;
    const embedded = require('./generateResponseEmbedded').handler;
    const entity = require('./generateResponseEntity').handler;
    const paged = require('./generateResponsePage').handler;
    await link(argv);
    await embedded(argv);
    await entity(argv);
    await paged(argv);

    if (argv.updateSpec) {
        const specUpdate = require('./addResponseToSpec').handler;
        await specUpdate(argv);
    }

    logger.info('Created response');
};
