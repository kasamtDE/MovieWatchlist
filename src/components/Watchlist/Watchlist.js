import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalState";
import { SearchContext } from "../Contexts/SearchContext";
import "../../main.css"


function Watchlist() {
  const { watchlist, addMovieToWatched, removeMoviefromWatchList } =
    useContext(GlobalContext);
  const { imageBaseUrl } = useContext(SearchContext);

  return (
    <div>
      <h1 className="watchlist-movies-title">My Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className="result-cart-container watchlist-container">
          {watchlist.map((movie) => {
            const { id, poster_path } = movie;
            return (
              <div className="result-image-container" key={id}>
                <div className="image-container">
                  <img src={imageBaseUrl + poster_path} />
                  <div className="image-overlay">
                    <button
                      className="watched-button"
                      onClick={() => addMovieToWatched(movie)}
                    >
                      Move To Watched
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => removeMoviefromWatchList(movie)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="cart-empty">
          <span>Your Watchlist Is Empty...</span>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
