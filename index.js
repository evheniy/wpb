const debug = require('debug')('wbp:index');
const config = require('./src/config');

debug(config);

module.exports = config;
