var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var tvseries = new Schema({
	title: {type: String},
	year: {type: Number},
	country : {type: String},
	seasons: {type: Number},
	genre: {type:String, enum:
		['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
	},
	sinopsis: {type:String}
});

module.exports = mongoose.model('TvSeries', tvseries);
