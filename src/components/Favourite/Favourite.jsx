import { HeaderContainer, MovieComponent, MovieInfo } from "..";
import React, { useEffect, useState } from "react";

function Favourite() {
  const [favourites, setFavourites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);
  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <HeaderContainer />
      {/* DIVIDER */}
      <div className="divider" />
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          onMovieSelect={setSelectedMovie}
        />
      )}
      {/* movie list */}
      <div className="movie_list_container">
        {favourites?.length ? (
          favourites.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              isFav={true}
              onMovieSelect={setSelectedMovie}
              removeFavouriteMovie={removeFavouriteMovie}
            />
          ))
        ) : (
          <h1>Add Favourite Movies</h1>
        )}
      </div>
    </>
  );
}

export default Favourite;
