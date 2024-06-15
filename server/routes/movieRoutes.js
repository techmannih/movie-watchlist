const express = require('express');
const router = express.Router();
const {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    toggleWatched,
    rateMovie,
    reviewMovie,
} = require('../controller/movieController');

// Movie CRUD operations
router.route('/')
    .get(getMovies) // Get all movies
    .post(addMovie); // Add a new movie

router.route('/:id')
    .get(getMovieById) // Get a specific movie by ID
    .put(updateMovie) // Update a movie by ID
    .delete(deleteMovie); // Delete a movie by ID

// Additional movie operations
router.put('/:id/toggleWatched', toggleWatched); // Toggle watched status of a movie
router.put('/:id/rate', rateMovie); // Rate a movie
router.put('/:id/review', reviewMovie); // Review a movie

module.exports = router;
