
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var cyclerlance = require( './routes/cyclerlance' );
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
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

app.all( '*', function( req, res, next ) {
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

app.get('/', routes.index);
app.get('/users', user.list);
app.post( '/introtext', cyclerlance.getIntroText );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
