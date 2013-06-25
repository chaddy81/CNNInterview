
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , cnnbrk = require('./routes/cnnbrk')
  , http = require('http')
  , util = require('util')
  , path = require('path');
  
var twitter = require('twit');

twit = new twitter({
  consumer_key: 'W49OaN8LiKPLq6wQf86kA',
  consumer_secret: 'DbePDzDReL2FYOfrLz84f81ubq4qeEbK1lxM5CCnTE',
  access_token: '14185531-aUcBxyBXZLbHyqJCXQeSe7RSoqZjElXvOeg9g3kSC',
  access_token_secret: 'chgwjhD4JZ3dQhDNIe0hc2FfaLY38e87Q9jZG48TsiY'
});

var app = express();

// all environments
app.set('port', process.env.PORT || 30000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/cnnbrk-tweets', cnnbrk.index);
app.post('/cnnbrk-tweets', function(req, res) {
  twit.get('statuses/user_timeline',{ screen_name: 'cnnbrk', count: 10 }, function(err, reply) {
    res.send(reply);
  });
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
