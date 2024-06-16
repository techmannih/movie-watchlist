import React from 'react';
import MovieForm from '../components/movieForm';

const AddMoviePage = ({ history }) => {
    return (
        <div>
            <h1>Add Movie</h1>
            <MovieForm history={history} />
        </div>
    );
};

export default AddMoviePage;
