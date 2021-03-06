#!/usr/bin/env node

'use strict';

// Modules
var debug = require('debug')('raneto');

// Here is where we load Raneto.
var raneto = require('../app/index.js');

// Then, we load our configuration file
// This can be done inline, with a JSON file,
// or with a Node.js module as we do below.
var config = require('./config.js');

// Finally, we initialize Raneto
// with our configuration object
var app = raneto(config);

// Load the HTTP Server
var server = app.listen(app.get('port'), function () {
  debug('Express HTTP server listening on port ' + server.address().port);
});