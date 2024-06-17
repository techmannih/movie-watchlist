import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "./movieItems";
import "./movieList.css";
const MovieList = () => {
  const movies = useSelector((state) => state.movieList.movies);
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
