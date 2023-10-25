const mongoose = require("./db");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  duration: String,
  genres: [String],
  director: String,
  actors: [String],
  summary: String,
  poster: String,
  imdbRating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
