var express = require('express'),
    app = express(),
//    bodyParser = require('body-parser'),
    path = require('path');
    
var setupExpress = function() {
//    app.use(bodyParser.json());
    
    app.use(express.static(path.join(__dirname, '../public')));
    console.log(__dirname);
    return app;
};

module.exports = setupExpress;