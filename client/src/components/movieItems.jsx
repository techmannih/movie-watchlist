import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie, toggleWatched } from "../redux/action/MovieAction";
import "./movieItem.css";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie._id));
  };

  const handleDeleteMovie = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (confirmDelete) {
      dispatch(deleteMovie(movie._id));
    }
  };

  return (
    <div className="movie-item">
      <h2 className="title">
        <span style={{ color: "#bb86fc" }}>{movie.title}</span>
      </h2>
      <h5>
        <b>ID:</b> {movie._id}
      </h5>
      <p>
        <b>Description: </b>
        <span style={{ fontSize: "18px" }}>{movie.description}</span>
      </p>
      <h4>
        <b>Release Year:</b> {movie.releaseYear}
      </h4>
      <h4>
        <b>Genre:</b> {movie.genre}
      </h4>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={handleToggleWatched}
        />
        <span className="slider"></span>
      </label>
      <div className="movie-item-actions">
        <Link to={`/movie/${movie._id}/edit`} className="action-link">
          Edit
        </Link>
        <div className="button-container">
          <button onClick={handleDeleteMovie} className="action-button">
            Delete
          </button>
        </div>
      </div>

      <Link to={`/movie/${movie._id}`}>Movie Details</Link>
    </div>
  );
};

export default MovieItem;
