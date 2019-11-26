/**
 * @fileOverview Entry command for responses
 */

exports.command = 'entity <command>';
exports.desc = 'OAS entity commands';

exports.builder = (yargs) => {
    return yargs.
        commandDir('./entity_commands');
};

exports.handler = (argv) => {};
