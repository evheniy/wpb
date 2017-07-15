const debug = require('debug')('wpb:index');
const config = require('./src/config');

debug(config);

module.exports = config;
