import React, { useEffect, useState } from "react";

import { MovieComponent } from "..";

function MovieList(props) {
  const { movieList, setSelectedMovie, addFavouriteMovie } = props;
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  return (
    <div className="movie_list_container">
      {movieList?.length ? (
        movieList.map((movie, index) => (
          <MovieComponent
            key={index}
            movie={movie}
            isFav={favourites.includes(movie)}
            onMovieSelect={setSelectedMovie}
            addFavouriteMovie={addFavouriteMovie}
          />
        ))
      ) : (
        <h1>Search for movies</h1>
      )}
    </div>
  );
}

export default MovieList;
