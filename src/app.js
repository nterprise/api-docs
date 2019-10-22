/**
 * @fileOverview Main express bootstrap
 */
const express = require('express');
const app = express();
const staticOptions = {
    cacheControl: true,
    etag: true,
    maxAge: '2 days',
    immutable: true,
};

app.use('/', express.static(`${__dirname}/../public`, staticOptions));
app.use('/auth',
    express.static(`${__dirname}/../data/docs/auth`, staticOptions));
app.use('/v1', express.static(`${__dirname}/../data/docs/v1`, staticOptions));
app.use('/v2', express.static(`${__dirname}/../data/docs/v2`, staticOptions));

module.exports = app;
