import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AddMoviePage from './pages/AddMoviePages';
import EditMoviePage from './pages/EditMoviePages';
import MovieDetailPage from './pages/MovieDetails';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddMoviePage />} />
            <Route path="/movie/:id/edit" element={<EditMoviePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
    );
}

export default App;
