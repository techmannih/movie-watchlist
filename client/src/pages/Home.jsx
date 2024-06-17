// HomePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../redux/action/MovieAction';
import MovieList from '../components/movieList';
import './home.css';
const HomePage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movieList.movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <div className='watchlist'>
            <h1>My Movie Watchlist</h1>
            <Link to="/add">Add Movie</Link>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
