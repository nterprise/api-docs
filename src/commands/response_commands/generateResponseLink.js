const uuid = require('uuid');
const {folders} = require('../../folders');
const {logger} = require('@nterprise/common-js');
const _ = require('lodash');

exports.command = 'link <schema>';
exports.describe = 'Creates a link for the schema';

const buildResponseLink = (relation, path, entityId = '') => {
    path = path || relation;
    return `{
  "type": "object",
  "x-ui-hide": true,
  "properties": {
    "_links": {
      "type": "object",
      "readOnly": true,
      "properties": {
        "nter:${relation}": {
          "type": "object",
          "readOnly": true,
          "properties": {
            "href": {
              "type": "string",
              "example": "https://api.nterprise.com/${path}${entityId}"
            }
          }
        }
      }
    }
  }
}`;
};

exports.handler = async (argv) => {
    logger.info('Creating response links');

    // fetch all link
    argv._writeFile(
        `${folders.links}/link${_.upperFirst(_.camelCase(argv.relation))}.json`,
        buildResponseLink(argv.relation),
    );

    // fetch entity link
    argv._writeFile(
        `${folders.links}/link${_.upperFirst(_.camelCase(argv.schema))}.json`,
        buildResponseLink(
            argv.relation,
            null,
            `/${uuid.v4()}`
        ),
    );

    logger.info('Created response link');
};
