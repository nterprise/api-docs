const {folders} = require('../../folders');
const _ = require('lodash');
const fs = require('fs');

exports.command = 'permission';
exports.describe = 'Generates the permission table';

exports.handler = async (argv) => {
    const logger = argv.logger;
    logger.info('Generating permissions table');

    const permissionFile = [
        folders.jekyllPath,
        'schemas',
        'niagara',
        'permissions.json',
    ].join('/');

    logger.debug(`permissions file ${permissionFile}`);
    const unOrdered = require(permissionFile);

    logger.debug('Loaded permissions');

    // Sort the permissions together
    const permissions = _.reduce(
        _.keys(unOrdered).sort(),
        (reduced, key) => _.set(reduced, key, _.get(unOrdered, key)),
        {},
    );

    logger.debug('Permissions sorted');

    const fileName = `${folders.jekyllPath}/api/niagara/permissions_table.md`;

    let fileStr = ``;

    const listPermission = (permissions) => _.map(
        permissions,
        (permission) => `<a href="#${permission}">${permission}</a>`,
    ).join('<br>');

    const checkForPermission = (check) => {
        _.map(check, (permission) => {
            permission = permission.replace(/_/g, '');
            if (!_.has(permissions, permission)) {
                logger.warn(`'${permission}' is missing configuration`);
            }
        });
    };

    const getRelatedForPermission = _.memoize(
        (relatedPermission, key) => {
            logger.debug(`fetching related "${key}" for '${relatedPermission}'`);
            const related = _.get(
                permissions,
                `${relatedPermission}.${key}`,
                [],
            );
            logger.debug(`"${key}" for '${relatedPermission}' is ${related}`);
            return related;
        },
    );

    const getRelated = (key, relatedPermissions) => {
        logger.debug(`getRelated ${key}`);
        return _.reduce(
            relatedPermissions,
            (requiredPermissions, permission) => {
                logger.debug(`Fetching ${key} for ${permission}`);
                const related = _.flatten(_.map(
                    getRelatedForPermission(permission, key),
                    (permission) => {
                        // eslint-disable-next-line max-len
                        logger.debug(`fetching child "${key}" for '${permission}'`);
                        return getRelatedForPermission(permission, key);
                    },
                ));

                return _.uniq([
                    ...requiredPermissions,
                    ...related,
                ]);
            },
            relatedPermissions,
        ).sort();
    };

    let lastEntity = '';
    _.forEach(permissions, (permData, permission) => {
        logger.info(`Permission: ${permission}`);
        const [entity] = permission.split(':');
        logger.debug(`Entity ${entity}`);
        if (lastEntity !== entity) {
            logger.debug('New entity');
            lastEntity = entity;
            fileStr += `\n### ${_.startCase(entity)}\n\n`;
            const row = [
                null,
                'Permission',
                'Description',
                'Grants',
                'Required Permission(s)',
                'Grants to Children',
                '\n',
            ].join('|');
            fileStr += row;
            fileStr += `|---|---|\n`;
        }

        const grants = getRelated(
            'grants',
            _.get(permData, 'grants', []),
        );

        const childGrants = getRelated(
            'grants_child',
            _.get(permData, 'grants_child', []),
        );

        const requiredGrants = getRelated(
            'required',
            _.get(permData, 'required', []),
        );

        checkForPermission(grants);
        checkForPermission(childGrants);
        checkForPermission(requiredGrants);

        const permRow = [
            null,
            `<span id="${permission}">${permission}</span>`,
            _.get(permData, 'description', ''),
            listPermission(grants),
            listPermission(requiredGrants),
            listPermission(childGrants),
            '\n',
        ].join('|');
        fileStr += permRow;
    });

    argv._writeFile(
        fileName,
        fileStr,
    );
}
;
