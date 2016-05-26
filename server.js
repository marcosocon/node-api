//Require Modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var models     = require('./models/tvserie')(app, mongoose);
var TVSerieCtrl = require('./controllers/tvseries');

//Using Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Setting up example route.
var router = express.Router();
router.get('/', function(req, res){
	res.send('Hello World!');
});
app.use(router);

//API router
var tvseries = express.Router();
	tvseries.route('/tvseries')
		.get(TVSerieCtrl.findAll)
		.post(TVSerieCtrl.addTVSerie);
	tvseries.route('/tvseries/:id')
			.get(TVSerieCtrl.findById)
			.post(TVSerieCtrl.updateTVSerie)
			.delete(TVSerieCtrl.deleteTVSerie);
app.use('/api', tvseries);

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
