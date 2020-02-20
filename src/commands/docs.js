/**
 * @fileOverview Entry command for responses
 */

exports.command = 'docs <command>';
exports.desc = 'Document generation [api]';

exports.builder = (yargs) => {
    return yargs.
        describe('api', 'Choose API version').
        choices('api', ['niagara', 'auth', 'caapi']).
        commandDir('./doc_commands');
};

exports.handler = (argv) => {
};
