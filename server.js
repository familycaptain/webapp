var app = require('./config/express')();

//require('./server/db').then(function() {
//    require('./server/routes/apiRoutes')(app);
    
    var server = app.listen(8080, function() {
        var host = server.address().address;
        var port = server.address().port;
        
        console.log('Family Captain listening at http://%s:%s', host, port);
    });    
//});