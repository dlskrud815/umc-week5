import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  return (
    <div className="movie">
      <img src={props.posterPath} alt={props.title} />
      <div className="movie-description">
        <div className="movie-description-title">{props.title}</div>
        <p>{props.overview}</p>
      </div>
      <div className="movie-info">
        <div className="movie-title">{props.title}</div>
        <div className="movie-rating">{props.voteAverage}</div>
      </div>
    </div>
  );
}

// PropTypes 정의
Movie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};

export default Movie;
