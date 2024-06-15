const Movie = require('../models/movieModel');

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  try {
    const { title, description, releaseYear, genre } = req.body;
    const movie = new Movie({ title, description, releaseYear, genre });
    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
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
      res.json(updatedMovie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
      await Movie.deleteOne({ _id: req.params.id });
      res.json({ message: 'Movie removed' });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Toggle watched status of a movie
const toggleWatched = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.watched = !movie.watched;
    await movie.save();

    res.json({ message: 'Watched status updated', movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Rate a movie
const rateMovie = async (req, res) => {
  try {
    const { rating } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.ratings.push(rating);
    await movie.save();

    res.json({ message: 'Rating added', movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Review a movie
const reviewMovie = async (req, res) => {
  try {
    const { review } = req.body;
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.reviews.push(review);
    await movie.save();

    res.json({ message: 'Review added', movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
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
