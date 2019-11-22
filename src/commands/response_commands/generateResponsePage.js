const {folders} = require('../../folders');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');

exports.command = 'page <schema>';
exports.describe = 'Creates a paged response schema';
const buildResponsePage = (relation, embedded) => {
    /* eslint-disable */
    return `{
  "description": "A paged response for ${_.lowerCase(relation)}",
  "content": {
    "application/hal+json": {
      "schema": {
        "properties": {
          "_embedded": {
            "type": "object",
            "properties": {
              "nter:${relation}": {
                "type": "array",
                "maxItems": 100,
                "items": {
                  "$ref": "../schemas/hal/hal${_.upperFirst(_.camelCase(embedded))}.json"
                }
              }
            }
          }
        },
        "allOf": [
          {
            "$ref": "../schemas/hal/halPaginationOffset.json"
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
    logger.info('Creating paged response');

    argv._writeFile(
        `${folders.responses}/${_.camelCase(argv.schema)}Page.json`,
        buildResponsePage(argv.relation, argv.schema),
    );

    logger.info('Created paged response');
};
