const {folders} = require('../../folders');
const glob = require('glob');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const RefParser = require('json-schema-ref-parser');

exports.command = 'merge-schema';
exports.describe = 'Merge schemas into one definition';

const cleanSchema = (ogSchema, file) => {
    if (_.has(ogSchema, 'x-niagara-ref')) {
        const [refFile, ref] = ogSchema['x-niagara-ref'].split('#');
        const dir = path.dirname(file);
        const refSchema = require(`${dir}/${refFile}`);
        const refPath = ref.replace(/\//gm, '.').substr(1);
        const refProperty = _.get(refSchema, refPath);
        const refPropertyName = refPath.substr(
            refPath.lastIndexOf('.') + 1,
        );

        return {
            type: 'object',
            additionalProperties: false,
            required: [
                refPropertyName,
            ],
            properties: _.set({}, refPropertyName, refProperty),
        };
    }

    return _.reduce(
        ogSchema,
        (schema, value, key) => {
            if (_.get(value, 'readOnly', false)) {
                _.unset(schema, key);
                return schema;
            }

            if (_.isObject(value)) {
                let clean = cleanSchema(value, file);
                clean = _.has(clean, '$ref') ? _.pick(clean, '$ref') : clean;
                _.set(schema, key, clean);
            }

            if (key === 'x-niagara-raw-ref') {
                schema = {
                    '$ref': value,
                };

                return schema;
            }

            if (_.startsWith(key, 'x-')) {
                _.unset(schema, key);
            }

            if (key === 'description') {
                _.unset(schema, key);
            }

            if (key === 'example') {
                _.unset(schema, key);
            }

            return schema;
        },
        ogSchema,
    );
};


exports.handler = async (argv) => {
    logger.info('Merging Schemas');
    logger.debug('argv', argv);
    const files = _.flatten(glob.sync(`${folders.schemas}/**/*.json`));
    // const files = [
    //     '/Users/chuckreeves/Projects/api-docs/data/docs/oas/v2/components/schemas/customer.json',
    //     '/Users/chuckreeves/Projects/api-docs/data/docs/oas/v2/components/schemas/entityCommon.json',
    //     '/Users/chuckreeves/Projects/api-docs/data/docs/oas/v2/components/schemas/status.json',
    // ];
    logger.debug('Schema files', files);
    const mergedSchema = {};

    await Promise.all(_.map(
        files,
        async (file) => {
            logger.debug(`Processing file ${file}`);

            process.chdir(path.dirname(file));
            logger.debug('Dereferencing file');
            const schema = await RefParser.dereference(require(file));
            const name = _.get(schema, 'x-niagara-model', false);
            if (!name) {
                logger.debug(`${file} not a model`);
                return mergedSchema;
            }

            _.set(
                mergedSchema,
                _.lowerFirst(name),
                cleanSchema(schema, file),
            );
            return mergedSchema;
        },
    ));

    const pairs = _.toPairs(mergedSchema);
    const sorted = _.sortBy(pairs, '0');
    process.chdir(path.dirname(__dirname));
    fs.writeFileSync(
        '../../schemas.json',
        JSON.stringify(
            {
                '$schema': 'http://json-schema.org/draft-07/schema#',
                'type': 'object',
                'properties': _.fromPairs(sorted),
            },
            null,
            2,
        ),
    );
    logger.info('Merged schemas');
};
