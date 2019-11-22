const path = require('path');
const fs = require('fs');

const v2Path = path.normalize(`${__dirname}/../data/docs/v2`);
const openApiDoc = `${v2Path}/openapi.json`;
const componentsPath = `${v2Path}/components`;
const pathsPath = `${v2Path}/paths`;

const recurseFolder = (base, dir = '') => {
    const fullPath = path.normalize(`${base}/${dir}`);
    const files = fs.readdirSync(fullPath);
    return files.map((file) => {
        const stats = fs.statSync(`${fullPath}/${file}`);
        return stats.isFile()
            ? `${dir}/${file}`
            : recurseFolder(base, `${dir}/${file}`);
    });
};

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
    hal: `${componentsPath}/schemas/hal`,
    links: `${componentsPath}/schemas/links`,
    examples: `${componentsPath}/examples`,
};

module.exports.recurseFolder = recurseFolder;
