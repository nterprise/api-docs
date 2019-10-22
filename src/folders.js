const path = require('path');

const v2Path = path.normalize(`${__dirname}/../data/docs/v2`);
const openApiDoc = `${v2Path}/openapi.json`;
const componentsPath = `${v2Path}/components`;
const pathsPath = `${v2Path}/paths`;

module.exports.folders = {
    v2Path: v2Path,
    openApiDoc: openApiDoc,
    componentsPath: componentsPath,
    pathsPath: pathsPath,
    operationsPath: `${pathsPath}/operations`,
    parametersPath: `${componentsPath}/parameters`,
    requestBodies: `${componentsPath}/requestBodies`,
    responses: `${componentsPath}/responses`,
    schemas: `${componentsPath}/schemas`,
};
