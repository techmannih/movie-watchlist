import React from 'react';
import MovieForm from '../components/movieForm';
import './editmovie.css';
const EditMoviePage = ({ match, history }) => {
    return (
        <div>
            <h1>Edit Movie</h1>
            <MovieForm match={match} history={history} />
        </div>
    );
};

export default EditMoviePage;
