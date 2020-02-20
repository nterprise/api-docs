/**
 * @fileOverview Entry command for responses
 */

exports.command = 'generate <command>';
exports.desc = 'OAS example commands';

exports.builder = (yargs) => {
    return yargs.
        commandDir('./generate_commands');
};

exports.handler = (argv) => {
};
