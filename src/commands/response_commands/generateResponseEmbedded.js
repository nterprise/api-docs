const {folders} = require('../../folders');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');


exports.command = 'embedded <schema>';
exports.describe = 'Creates an embedded response schema';
const buildResponseBody = (relation, schema) => {
    /* eslint-disable */
    return `{
  "type": "object",
  "x-hal": true,
  "x-ui-hide": true,
  "properties": {
    "_links": {
      "type": "object",
      "properties": {
        "self": {
          "$ref": "../links/link${_.upperFirst(schema)}.json#/properties/_links/properties/nter:${relation}"
        }
      }
    }
  },
  "allOf": [
    {
      "$ref": "../${schema}.json"
    }
  ]
}`;
    /* eslint-enable */
};

exports.handler = async (argv) => {
    logger.info('Creating embedded response ');

    argv._writeFile(
        // eslint-disable-next-line max-len
        `${folders.hal}/hal${_.upperFirst(_.camelCase(argv.schema))}.json`,
        buildResponseBody(argv.relation, argv.schema),
    );

    logger.info('Created embedded response');
};
