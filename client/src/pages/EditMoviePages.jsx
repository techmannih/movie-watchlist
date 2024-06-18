import React from 'react';
import MovieForm from '../components/movieForm';
import './editmovie.css';

const EditMoviePage = ({ match, history }) => {
    return (
        <div className="edit-movie-page">
            <h1>Edit Movie</h1>
            <div className="form-container">
                <MovieForm match={match} history={history} />
            </div>
        </div>
    );
};

export default EditMoviePage;