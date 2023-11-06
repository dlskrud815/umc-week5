import React from "react";
import Movie from "C://ReactWorkspace/umc-workbook/umc-week5/src/Components/Movie.jsx";
import { movies } from "C://ReactWorkspace/umc-workbook/umc-week5/src/movieDummy.js"; // 영화 데이터

function Movies() {
  return (
    <div className="app-container">
      <div className="movie-list">
        {movies.results.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
