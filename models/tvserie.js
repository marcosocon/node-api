//Requiring Modules
var mongoose = require('mongoose');
	Schema = mongoose.Schema;

//Defining Schema

var tvserieSchema = new Schema({
	title:    { type: String },
	year:     { type: Number },
	country:  { type: String },
	seasons:  { type: Number },
	genre:    { type: String, enum:
		['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
	},
  sinopsis:  { type: String }
});

//Exporting Module

module.exports = mongoose.model('TVSerie', tvserieSchema);
