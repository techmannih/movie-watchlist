import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './movieItems';

const MovieList = () => {
    const movies = useSelector((state) => state.movieList.movies);
    return (
        <div>
            {movies.map((movie) => (
                <MovieItem key={movie._id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
