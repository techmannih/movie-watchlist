import React from "react";
import MovieForm from "../components/movieForm";
import "./addmovie.css"; 

const AddMoviePage = () => {
  return (
    <div className="add-movie-page">
      <h1>Add Movie</h1>
      <div className="form-container">
        <MovieForm />
      </div>
    </div>
  );
};

export default AddMoviePage;
