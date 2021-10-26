import { MovieComponent } from "..";
import React from "react";

function MovieList(props) {
  const { movieList, setSelectedMovie } = props;
  return (
    <div className="movie_list_container">
      {movieList?.length ? (
        movieList.map((movie, index) => (
          <MovieComponent
            key={index}
            movie={movie}
            onMovieSelect={setSelectedMovie}
          />
        ))
      ) : (
        <h1>Search for movies</h1>
      )}
    </div>
  );
}

export default MovieList;
