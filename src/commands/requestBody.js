/**
 * @fileOverview Entry command for responses
 */

exports.command = 'request-body <command>';
exports.desc = 'OAS request body commands';

exports.builder = (yargs) => {
    return yargs.
        option(
            'clear',
            {
                alias: 'c',
                // eslint-disable-next-line max-len
                describe: 'Clears the existing request bodies',
                default: false,
                global: true,
                boolean: true,
            }
        ).
        commandDir('./request_commands');
};

exports.handler = (argv) => {};
