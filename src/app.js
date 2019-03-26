/**
 * @fileOverview Main express bootstrap
 */
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const staticOptions = {
    cacheControl: true,
    etag: true,
    maxAge: '2 days',
    immutable: true
};

app.use('/v1', express.static(`${__dirname}/../data/docs/v1`, staticOptions));
app.use('/v2', express.static(`${__dirname}/../data/docs/v2`, staticOptions));

app.use('/api', swaggerUi.serve, swaggerUi.setup(null, {
    swaggerUrls: [
        {url: '/v1/openapi.json', name: 'Version 1 API'},
        {url: '/v2/openapi.json', name: 'Version 2 API'},
    ],
    explorer: true,
}));

module.exports = app;
