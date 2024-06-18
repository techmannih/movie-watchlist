const Movie = require('../models/movieModel');

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json({ message: 'Movies retrieved successfully', movies });
  } catch (error) {
    console.error('Error retrieving movies:', error);
    res.status(500).json({ message: 'An error occurred while retrieving movies' });
  }
};

// Get a movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.status(200).json({ message: 'Movie retrieved successfully', movie });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error retrieving movie by ID:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the movie' });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  try {
    const { title, description, releaseYear, genre } = req.body;
    const movie = new Movie({ title, description, releaseYear, genre });
    const createdMovie = await movie.save();
    res.status(201).json({ message: 'Movie added successfully', createdMovie });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ message: 'An error occurred while adding the movie' });
  }
};

// Update a movie by ID
const updateMovie = async (req, res) => {
  try {
    const { title, description, releaseYear, genre } = req.body;
    const movie = await Movie.findById(req.params.id);

    if (movie) {
      movie.title = title;
      movie.description = description;
      movie.releaseYear = releaseYear;
      movie.genre = genre;
      const updatedMovie = await movie.save();
      res.status(200).json({ message: 'Movie updated successfully', updatedMovie });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error updating movie:', error);
    res.status(500).json({ message: 'An error occurred while updating the movie' });
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
      await Movie.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Movie deleted successfully' });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error deleting movie:', error);
    res.status(500).json({ message: 'An error occurred while deleting the movie' });
  }
};

// Toggle watched status of a movie
const toggleWatched = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      movie.watched = !movie.watched;
      await movie.save();
      res.status(200).json({ message: 'Watched status updated successfully', movie });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error toggling watched status:', error);
    res.status(500).json({ message: 'An error occurred while updating the watched status' });
  }
};

// Rate a movie
const rateMovie = async (req, res) => {
  try {
    const { rating } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      movie.ratings.push(rating);
      await movie.save();
      res.status(200).json({ message: 'Rating added successfully', movie });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error adding rating:', error);
    res.status(500).json({ message: 'An error occurred while adding the rating' });
  }
};

// Review a movie
const reviewMovie = async (req, res) => {
  try {
    const { review } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      movie.reviews.push(review);
      await movie.save();
      res.status(200).json({ message: 'Review added successfully', movie });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'An error occurred while adding the review' });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
};
