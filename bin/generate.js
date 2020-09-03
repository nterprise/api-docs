#!/usr/bin/env node
/**
 * @fileOverview Entry point for cli
 */
const _ = require('lodash');
const yargs = require('yargs');
const fs = require('fs');

/* eslint-disable */
// noinspection BadExpressionStatementJS
yargs.
    option(
        'debug',
        {
            alias: 'd',
            describe: 'Enables debugging',
            default: false,
            global: true,
            boolean: true,
        },
    ).
    option(
        'verbose',
        {
            alias: 'v',
            describe: 'Enables verbose',
            global: true,
            default: false,
            boolean: true,
        },
    ).
    option(
        'overwrite',
        {
            alias: 'o',
            describe: 'Overwrite if file present',
            global: true,
            default: false,
            boolean: true,
        },
    ).
    /**
     * Adjusts the logger to add verbose or debugging
     */
    middleware((argv) => {
        const verbose = _.get(argv, 'verbose', false);
        const debug = _.get(argv, 'debug', false);

        process.env.CONSOLE_LOG = true;
        if (verbose) {
            process.env.LOG_LEVEL='info';
        }

        if (debug) {
            process.env.LOG_LEVEL='debug';
        }

        const moduleName = _.get(argv, '_', []).join(':');
        const logger = require('@nterprise/niagara-winston-logger')(
            moduleName,
        );

        logger.info('Verbose output');
        logger.debug('Debug output');

        argv.logger = logger;
    }).
    middleware((argv) => {
        const logger = argv.logger;
        const overwrite = _.get(argv, 'overwrite', false);

        argv._writeFile = (fileName, data) => {
            if (!overwrite && fs.existsSync(fileName)) {
                logger.error(`File ${fileName} exists not writing`);
                return;
            }

            if (fs.existsSync(fileName)) {
                logger.warn(`Overwriting file ${fileName}`);
            }

            logger.debug(`Writing data to ${fileName}`);
            fs.writeFileSync(fileName, data);
            logger.info(`Wrote to ${fileName}`);
        };
    }).
    commandDir('../src/commands').
    demandCommand().
    help().
    argv;
