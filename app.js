var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/locations/:slug', indexController.locationPage);




// --------------- THis was the long way of handling each page ----------------

// app.get('/canary-islands', function(req, res){
// 	res.render('canary-islands');
// });

// app.get('/cape-verde', function(req, res){
// 	res.render('cape-verde');
// });

// app.get('/strait-of-magellan', function(req, res){
// 	res.render('strait-of-magellan');
// });

// app.get('/guam', function(req, res){
// 	res.render('guam');
// });

// app.get('/phillipines', function(req, res){
// 	res.render('phillipines');
// });

var server = app.listen(8431, function() {
	console.log('Express server listening on port ' + server.address().port);
});
