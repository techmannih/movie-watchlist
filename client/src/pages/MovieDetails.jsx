import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../redux/action/MovieAction";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewPage";
import "./movieDetail.css";

const MovieDetailPage = () => {
  const { id: movieId } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector((state) =>
    state.movieList.movies.find((movie) => movie._id === movieId)
  );

  useEffect(() => {
    if (!movie) {
      dispatch(getMovieById(movieId));
    }
  }, [dispatch, movieId, movie]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-header">
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-detail-info">
        <p>
          <span>Description:</span> {movie.description}
        </p>
        <p>
          <span>Release Year:</span> {movie.releaseYear}
        </p>
        <p>
          <span>Genre:</span> {movie.genre}
        </p>
        <p>
          <span>Status:</span> {movie.watched ? "Watched" : "Not Watched"}
        </p>
      </div>

      <div className="additional-details">
        <p>
          <span>Ratings:</span> {movie.ratings.join(", ")}
        </p>
        <p>
          <span>Reviews:</span> {movie.reviews.join(", ")}
        </p>
      </div>

      <div className="movie-detail-rating">
        <h2>Rate this Movie</h2>
        <StarRating movieId={movie._id} />
      </div>
      <div className="movie-detail-review">
        <h2>Write a Review</h2>
        <ReviewForm movieId={movie._id} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
