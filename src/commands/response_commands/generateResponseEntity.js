const {folders} = require('../../folders');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');


exports.command = 'entity <schema>';
exports.describe = 'Creates a entity response';
const buildResponsePage = (embedded) => {
    /* eslint-disable */
    return `{
  "description": "A ${embedded} response",
  "content": {
    "application/hal+json": {
      "schema": {
        "type": "object",
        "allOf": [
          {
            "$ref": "../schemas/hal${_.upperFirst(_.camelCase(embedded))}.json"
          }
        ]
      }
    }
  }
}
`;
    /* eslint-enable */
};

exports.handler = async (argv) => {
    logger.info('Creating entity response');

    argv._writeFile(
        `${folders.responses}/${_.camelCase(argv.schema)}.json`,
        buildResponsePage(argv.schema),
    );

    logger.info('Created entity response');
};
