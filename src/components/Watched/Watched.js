import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";
import { SearchContext } from "../Contexts/SearchContext";
import "../../main.css"


function Watched() {
  const { watched,addMovieToWatchlist,removeMoviefromWatched } = useContext(GlobalContext);
  const { imageBaseUrl } = useContext(SearchContext);



  return (
    <div>
      <h1 className="watched-movies-title">Watched Movies</h1>
      {watched.length > 0 ? (
        <div className="result-cart-container watched-container">
          {watched.map((movie) => {
            const { id, poster_path } = movie;
            return (
              <div className="result-image-container" key={id}>
                <div className="image-container">
                  <img src={imageBaseUrl + poster_path} />
                  <div className="image-overlay">
                    <button className="watchlist-button"  onClick={() =>addMovieToWatchlist(movie)}>Move To Watchlist</button>
                    <button className="delete-button"  onClick={() =>removeMoviefromWatched(movie)}>X</button>
                  </div>
                </div>
              </div>
            );
          })}
           </div>
      ) : (
        <div className="cart-empty">
          <span>You Watched Nothing... </span>
        </div>
      )}
    </div>
  );
}

export default Watched;
