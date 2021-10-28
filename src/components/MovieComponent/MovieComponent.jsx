import "./MovieComponent.css";

import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import React from "react";

function MovieComponent(props) {
  const { Title, imdbID, Poster } = props.movie;
  const movie = props.movie;
  return (
    <div className="movie_container">
      <span className="movie_name">{Title}</span>
      <img src={Poster} alt={Title} className="image" />
      <div className="info_row">
        {props.isFav !== true ? (
          <AiOutlineHeart
            className="fav"
            onClick={() => props.addFavouriteMovie(movie)}
          />
        ) : (
          <FaHeart
            className="unfav"
            onClick={() => props.removeFavouriteMovie(movie)}
          />
        )}
        <div
          className="detail"
          onClick={() => {
            props.onMovieSelect(imdbID);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Read More
        </div>
      </div>
    </div>
  );
}

export default MovieComponent;
