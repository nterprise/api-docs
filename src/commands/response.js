/**
 * @fileOverview Entry command for responses
 */

exports.command = 'response <command>';
exports.desc = 'OAS Response commands';

exports.builder = (yargs) => {
    return yargs.
        option(
            'force',
            {
                alias: 'f',
                // eslint-disable-next-line max-len
                describe: 'Force writing the response even if the schema is not callable',
                default: false,
                global: true,
                boolean: true,
            }
        ).
        option(
            'clear',
            {
                alias: 'c',
                // eslint-disable-next-line max-len
                describe: 'Clears the existing response',
                default: false,
                global: true,
                boolean: true,
            }
        ).
        option(
            'update-spec',
            {
                alias: 'u',
                // eslint-disable-next-line max-len
                describe: 'Updates the openapi spec with the response references',
                default: false,
                global: true,
                boolean: true,
            }
        ).
        positional(
            'schema',
            {
                describe: 'The name of the schema file',
                global: true,
                demandOption: true,
                default: '__all__',
            },
        ).
        middleware(require('../middleware/schemaLookup')).
        middleware(require('../middleware/schemaCallable')).
        commandDir('./response_commands');
};

exports.handler = (argv) => {};
