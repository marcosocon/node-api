module.exports = function(app){
	var TvSeries = require('./tvseries');

	//GET All TVSeries
	findAll = function(req, res){
		TvSeries.find(function(err, tvseries){
			if (err) {
				console.log("ERROR: "+ err);
			}
			else{
				res.send(tvseries);
			}
		});
	};

	//GET One TVSerie by ID
	findByID = function(req, res){
		TvSeries.findByID(req.param.id, function(err, tvserie){
			if (err) {
				console.log("ERROR: "+ err);
			}
			else{
				res.send(tvserie);
			}
		});
	};


};
