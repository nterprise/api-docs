/**
 * @fileOverview Entry command for responses
 */

exports.command = 'schema <command>';
exports.desc = 'OAS schema commands';

exports.builder = (yargs) => {
    return yargs.
        option(
            'clear',
            {
                alias: 'c',
                // eslint-disable-next-line max-len
                describe: 'Clears the existing schema',
                default: false,
                global: true,
                boolean: true,
            },
        ).
        commandDir('./schema_commands');
};

exports.handler = (argv) => {
};
