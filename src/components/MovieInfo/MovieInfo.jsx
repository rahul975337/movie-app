import "./MovieInfo.css";

import React, { useEffect, useState } from "react";

import Axios from "axios";

function MovieInfo(props) {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${process.env.REACT_APP_API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="movie_info">
      <div className="main_card">
        {movieInfo ? (
          <>
            <div className="card_left">
              <div className="card_datails">
                <h1>{movieInfo?.Title}</h1>
                <div className="card_cat">
                  <p className="released">{movieInfo?.Released}</p>
                  <p className="genre">{movieInfo?.Genre}</p>
                  <p className="time">{movieInfo?.Runtime}</p>
                </div>
                <p className="plot">{movieInfo?.Plot}</p>
                <div className="buttons">
                  <button>{movieInfo?.Type}</button>
                  <button>IMDB : {movieInfo?.imdbRating}</button>
                  <button>{movieInfo?.Language}</button>
                </div>
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={movieInfo?.Poster} alt={movieInfo?.Title} />
              </div>
            </div>
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
      <button onClick={() => props.onMovieSelect()}>Close</button>
    </div>
  );
}

export default MovieInfo;
