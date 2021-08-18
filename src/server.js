'use strict'

const express = require('express');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const app = express();

app.get('/data', (req, res) => res.json({}));

const server = require('./src/server.js');

module.exports = {
  start: app.listen(3000),
  server: app
}
server.start(3000);
