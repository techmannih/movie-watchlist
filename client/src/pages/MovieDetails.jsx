import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../redux/action/MovieAction';
import StarRating from './StarRating';
import ReviewForm from './ReviewPage';

const MovieDetailPage = () => {
    const { id: movieId } = useParams();
    const dispatch = useDispatch();

    const movie = useSelector((state) =>
        state.movieList.movies.find((movie) => movie._id === movieId)
    );

    useEffect(() => {
        if (!movie) {
            dispatch(getMovieById(movieId));
        }
    }, [dispatch, movieId, movie]);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.releaseYear}</p>
            <p>{movie.genre}</p>
            <p>{movie.watched ? 'Watched' : 'Not Watched'}</p>

            <h2>Rate this Movie</h2>
            <StarRating movieId={movie._id} />

            <h2>Write a Review</h2>
            <ReviewForm movieId={movie._id} />
        </div>
    );
};

export default MovieDetailPage;
