import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  TOGGLE_WATCHED,
  SET_MOVIES,
  SET_MOVIE_DETAILS,
  RATE_MOVIE,
  REVIEW_MOVIE,
} from "../../constants/MovieConstants";

export const addMovie = (movie) => async (dispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies`,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (!response.ok) {
      throw new Error("Failed to add movie");
    }

    const data = await response.json();

    // Dispatch the action to update the Redux store
    dispatch({
      type: ADD_MOVIE,
      payload: data,
    });

    // Display success message
    console.log("Movie added successfully:", data); // You can replace this with a toast, alert, or notification

    return true; // Indicate success, if needed
  } catch (error) {
    console.error("Error adding movie:", error);
    // You might want to throw the error here or handle it in a different way
    return false; // Indicate failure, if needed
  }
};

export const getMovies = () => async (dispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies`);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    console.log("Raw response data:", data); // Log raw data

    if (!Array.isArray(data.movies)) {
      console.error("Fetched data is not an array:", data.movies);
      throw new Error("Fetched data is not an array");
    }

    dispatch({
      type: SET_MOVIES,
      payload: data.movies,
    });

    console.log("Movies fetched successfully:", data.movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch movie");
    }

    const data = await response.json();

    console.log("Movie fetched successfully:", data); // Optional: Log success message

    dispatch({
      type: SET_MOVIE_DETAILS,
      payload: data, // Assuming `data` represents a single movie object
    });

    return data; // Return the movie data
  } catch (error) {
    console.error("Error fetching movie:", error);
    // Optionally handle errors, e.g., dispatch an error action or set an error state
    throw error; // Re-throw the error to propagate it
  }
};

export const editMovie = (movie) => async (dispatch) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/movies/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit movie");
    }

    const data = await response.json();
    dispatch({
      type: EDIT_MOVIE,
      payload: data,
    });

    console.log("Movie edited successfully!");
  } catch (error) {
    console.error("Error editing movie:", error);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    const response = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete movie");
    }

    // If deletion is successful, dispatch the action to update the Redux store
    dispatch({
      type: DELETE_MOVIE,
      payload: id, // Send the id of the deleted movie as payload
    });

    console.log("Movie deleted successfully:", id); // Optional: Log success message
  } catch (error) {
    console.error("Error deleting movie:", error);
    // Optionally handle errors, e.g., dispatch an error action or set an error state
  }
};



export const toggleWatched = (id) => async (dispatch, getState) => {
  try {
    const movies = getState().movieList.movies;
    const movie = movies.find((m) => m._id === id);

    if (!movie) {
      throw new Error(`Movie with id ${id} not found in state`);
    }

    const updatedMovie = { ...movie, watched: !movie.watched };
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${id}/toggleWatched`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    });

    if (!response.ok) {
      throw new Error("Failed to toggle watched status");
    }

    // Update the local state with the updated movie
    const data = await response.json();

    // Dispatch the action to update Redux state
    dispatch({
      type: TOGGLE_WATCHED,
      payload: data.movie,
    });

    // Save updated state to local storage
    localStorage.setItem('movies', JSON.stringify(updatedMovies));

    // Alternative console output based on watched status
    const consoleMessage = updatedMovie.watched
      ? "Marked as watched successfully:"
      : "Marked as unwatched successfully:";

    console.log(consoleMessage, data); // Log success message

  } catch (error) {
    console.error("Error toggling watched status:", error);
    // Optionally handle errors, e.g., dispatch an error action or set an error state
  }
};




export const rateMovie = (id, rating) => async (dispatch) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${id}/rate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating }),
    });

    if (!response.ok) {
      throw new Error("Failed to rate movie");
    }

    const data = await response.json();
    dispatch({
      type: RATE_MOVIE,
      payload: data.movie, // Ensure payload is the updated movie object
    });

    console.log("Movie rated successfully!");
  } catch (error) {
    console.error("Error rating movie:", error);
  }
};
export const reviewMovie = (id, review) => async (dispatch) => {
  try {
    const response = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${id}/review`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review }),
    });

    if (!response.ok) {
      throw new Error("Failed to review movie");
    }

    const data = await response.json();
    dispatch({
      type: REVIEW_MOVIE,
      payload: data.movie, // Assuming `data` contains the updated movie object with review
    });

    console.log("Movie reviewed successfully!");
  } catch (error) {
    console.error("Error reviewing movie:", error);
  }
};



export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});
