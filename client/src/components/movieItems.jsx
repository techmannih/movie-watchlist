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
    dispatch(deleteMovie(movie._id));
  };

  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <h5>{movie._id}</h5>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={handleToggleWatched}
        />
        <span className="slider"></span>
      </label>
      <div className="movie-item-actions">
        <Link to={`/movie/${movie._id}/edit`}>Edit</Link>
        <button onClick={handleDeleteMovie}>Delete</button>
        <Link to={`/movie/${movie._id}`}>Movie Details</Link>
      </div>
    </div>
  );
};
export default MovieItem;
