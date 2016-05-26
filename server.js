//Require Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//Using Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Setting up routes.
var router = express.Router();

router.get('/', function(req, res){
	res.send('Hello World!');
});

app.use(router);
//Connect to DB
mongoose.connect('mongodb://localhost/tvseries', function(err,res){
	if (err) {
		console.log('ERROR: connecting to Database. ' + err);
	}
	//Server listening.
	app.listen(3030, function(){
		console.log("Express server running on port 3030");
	});
});
