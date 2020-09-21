#!/usr/bin/env node
/**
 * @fileOverview Entry point for cli
 */
process.env.CONSOLE_LOG = 1;
const logger = require('@nterprise/niagara-winston-logger')();
const winston = require('winston');
const _ = require('lodash');
const yargs = require('yargs');
const fs = require('fs');

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
        let level = 'warn';

        if (verbose) {
            level = 'info';
        }

        if (debug) {
            level = 'debug';
        }

        const moduleName = _.get(argv, '_', []).join(':');

        logger.transports.forEach((transport) => {
            transport.level = level;

            if (transport.name !== 'console') {
                return;
            }

            transport.format = winston.format.combine(
                winston.format.label({label: moduleName, message: true}),
                winston.format.colorize(),
                winston.format.simple(),
            );
        });
        logger.info('Verbose output');
        logger.debug('Debug output');
    }).
    middleware((argv) => {
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
