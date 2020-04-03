const path = require('path');
const fs = require('fs');

const docsPath = path.normalize(`${__dirname}/../data/docs`);
const templatePath = `${docsPath}/templates`;
const oasPath = `${docsPath}/oas`;
const v2Path = `${oasPath}/v2`;
const v1Path = `${oasPath}/v1`;
const authPath = `${oasPath}/auth`;
const jekyllPath = `${docsPath}/jekyll`;
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
    oasPath: oasPath,
    v1Path: v1Path,
    jekyllPath: jekyllPath,
    authPath: authPath,
    openApiDoc: openApiDoc,
    componentsPath: componentsPath,
    pathsPath: pathsPath,
    templatePath: templatePath,
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
