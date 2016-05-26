module.exports = function(app){
	var TVSerie = require('./tvseries');

	//GET All TVSeries
	findAll = function(req, res){
		TVSerie.find(function(err, tvseries){
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
		TVSerie.findById(req.param.id, function(err, tvserie){
			if (err) {
				console.log("ERROR: "+ err);
			}
			else{
				res.send(tvserie);
			}
		});
	};

	//POST One TVSerie
	addTVSerie = function(req, res){
		console.log("POST");
		console.log(req.body);

		var tvserie = new TvSerie({
			title: req.body.title,
			year: req.body.year,
			country: req.body.country,
			seasons: req.body.seasons,
			genre: req.body.genre,
			sinopsis: req.body.sinopsis
		});

		tvserie.save(function(err){
			if (err) {
				console.log("ERROR: "+err);
			}
			else{
				console.log("TVSerie Saved!");
			}
		});
			res.send(tvserie);
	};

	//PUT Update a TVSerie
	updateTVSerie = function(req,res){
		TVSerie.findById(req.param.id ,function(err, tvserie){
			if (err) {
				console.log("ERROR:"+ err);
			}
			else{
				tvserie.title = req.body.title;
				tvserie.year = req.body.year;
				tvserie.country = req.body.country;
				tvserie.seasons = req.body.seasons;
				tvserie.genre = req.body.genre;
				tvserie.sinopsis = req.body.sinopsis;
				tvserie.save(function(err){
					if (err) {
						console.log("ERROR:"+ err);
					}
					else{
						console.log("TVSerie Updated!");
					}
				});
			}
		});
	};

	//DELETE a TVSerie
	deleteTVSerie = function(req, res){
		TVSerie.findById(req.param.id, function(err, tvserie){
			if (error) {
				console.log("ERROR: "+err);
			}
			else{
				tvserie.remove(function(err,res){
					if (err) {
						console.log("ERROR: "+err);
					}
					else{
						console.log("TVSerie Removed!");
					}
				});
			}
		});
	};

	//API Routes
	app.get('/tvseries', findAll);
	app.get('/tvseries/:id', findById);
	app.post('/tvseries', addTVSerie);
	app.put('/tvseries', updateTVSerie);
	app.delete('/tvseries/:id', deleteTVSerie);

};
