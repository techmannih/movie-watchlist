import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie, toggleWatched } from '../redux/action/MovieAction';

const MovieItem = ({ movie }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{movie.title}</h2>
            <h5>{movie._id}</h5>
            <p>{movie.description}</p>
            <p>{movie.releaseYear}</p>
            <p>{movie.genre}</p>
            <button onClick={() => dispatch(toggleWatched(movie._id))}>
                {movie.watched ? 'Unwatch' : 'Watch'}
            </button>
            <Link to={`/movie/${movie._id}/edit`}>Edit</Link>
            <button onClick={() => dispatch(deleteMovie(movie._id))}>Delete</button>

            <Link to={`/movie/${movie._id}`}>Movie Details</Link> {/* Link to movie detail page */}
        </div>
    );
};

export default MovieItem;
