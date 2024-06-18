import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/action/MovieAction";
import MovieList from "../components/movieList";
import "./home.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieList.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="home-page">
      <h1>My Movie Watchlist</h1>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <Link
          to="/add"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#bb86fc",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
        >
          Add Movie
        </Link>
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;

