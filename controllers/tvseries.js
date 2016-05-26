var mongoose = require('mongoose');
var TVSerie  = mongoose.model('TVSerie');

exports.findAll = function (req, res) {
	TVSerie.find(function(err, tvseries){
		if (err) {
			return res.status(500).send(err.message);
		}
		else{
			console.log('GET /tvseries');
			res.status(200).jsonp(tvseries);
		}
	});
};

exports.findById = function (req, res) {
	TVSerie.findById(req.params.id, function(err, tvserie){
		if (err) {
			return res.status(500).send(err.message);
		}
		else{
			console.log('GET /tvseries/'+ req.params.id);
			res.status(200).jsonp(tvserie);
		}
	});
};

exports.addTVSerie = function (req, res) {
	console.log('POST');
	console.log(req.body);
	var tvserie = new TVSerie({
		title: req.body.title,
		year: req.body.year,
		country: req.body.country,
		seasons: req.body.seasons,
		genre: req.body.genre,
		sinopsis: req.body.sinopsis
	});

	tvserie.save(function(err, tvserie){
		if (err) {
			return res.status(500).send(err.message);
		}
		else{
			res.status(200).jsonp(tvserie);
		}
	});
};

exports.updateTVSerie = function (req, res) {
	TVSerie.findById(req.params.id, function(err, tvserie){
		if (err) {
			return res.status(500).send(err.message);
		}
		else{
			tvserie.title   = req.body.petId;
			tvserie.year    = req.body.year;
			tvserie.country = req.body.country;
			tvserie.seasons = req.body.seasons;
			tvserie.genre   = req.body.genre;
			tvserie.sinopsis = req.body.sinopsis;
		}
		tvserie.save(function(err, res){
			if (err) {
				return res.status(500).send(err.message);
			}
			else{
				res.status(200).jsonp(tvserie);
			}
		});
	});
};
exports.deleteTVSerie = function (req, res) {
	TVSerie.findById(req.params.id, function(err, tvserie){
		if (err) {
			return res.status(500).send(err.message);
		}
		else{
			tvserie.remove(function(err){
				if (err) {
					return res.status(500).send(err.message);
				}
			});
		}
	});
};
