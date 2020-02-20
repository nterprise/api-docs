/**
 * @fileOverview Entry command for responses
 */

exports.command = 'parameter <command>';
exports.desc = 'OAS parameter commands';

exports.builder = (yargs) => {
    return yargs.
        option(
            'clear',
            {
                alias: 'c',
                // eslint-disable-next-line max-len
                describe: 'Clears the existing parameters',
                default: false,
                global: true,
                boolean: true,
            },
        ).
        commandDir('./parameter_commands');
};

exports.handler = (argv) => {
};
