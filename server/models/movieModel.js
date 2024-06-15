const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  releaseYear: { type: Number },
  genre: { type: String },
  watched: { type: Boolean, default: false },
  ratings: [{ type: Number, min: 1, max: 5 }],
  reviews: [{ type: String }],
});

module.exports = mongoose.model('Movie', movieSchema);
