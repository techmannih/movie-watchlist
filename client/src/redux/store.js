// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducer/MovieReducer';

const store = configureStore({
    reducer: {
        movieList: movieReducer, // Ensure correct naming and path
        // Add other reducers if needed
    },
});

export default store;
