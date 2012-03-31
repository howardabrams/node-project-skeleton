/**
 * Module dependencies.
 */

var express = require('express');
var router  = require('./router');
var config  = require('./config').config;

var app     = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.listen(config.port);
console.log("Express server listening on port %d in %s mode", 
	    app.address().port, app.settings.env);
