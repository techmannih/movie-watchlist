import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { addMovie, editMovie } from '../redux/action/MovieAction';

const MovieForm = () => { // Remove history from props
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Access navigate function from react-router-dom
    const { id } = useParams();

    const movieDetails = useSelector((state) =>
        state.movieList.movies.find((movie) => movie._id === id)
    );

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [genre, setGenre] = useState('');

    useEffect(() => {
        if (movieDetails) {
            setTitle(movieDetails.title);
            setDescription(movieDetails.description);
            setReleaseYear(movieDetails.releaseYear);
            setGenre(movieDetails.genre);
        }
    }, [movieDetails]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await dispatch(editMovie({ _id: id, title, description, releaseYear, genre }));
            } else {
                await dispatch(addMovie({ title, description, releaseYear, genre }));
            }
            // Display success message
            console.log('Movie added successfully');

            // Navigate to the homepage using navigate function
            navigate('/');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Release Year</label>
                <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default MovieForm;
