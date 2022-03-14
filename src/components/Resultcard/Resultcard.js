import React, { useEffect, useContext } from "react";
import { SearchContext } from "../Contexts/SearchContext";
import { GlobalContext } from "../Contexts/GlobalState";
import "../../main.css"
function Resultcard() {
  const { results, imageBaseUrl } = useContext(SearchContext);
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
    removeMovie,
  } = useContext(GlobalContext);

  return (
    <div className="result-cart-container">
      {results?.length > 0 &&
        results.map((movie) => {
          const { id, poster_path, title, release_date } = movie;

          const getSameWatchlist = watchlist.find(
            (singleMovie) => singleMovie.id === movie.id
          );
          const getSamewatched = watched.find(
            (singleMovie) => singleMovie.id === movie.id
          );
          const watchlistDisabled = getSameWatchlist ? true : false;
          const watchedDisabled = getSamewatched ? true : false;

          if (poster_path === null) return;
          return (
            <div className="result-image-container" key={id}>
              <h1 className="title">{title}</h1>
              <span className="release-date">
                <strong>{release_date?.substring(0, 4)}</strong>{" "}
              </span>
              <div className="image-container">
                <img src={imageBaseUrl + poster_path} />
                <div className="image-overlay">
                  <button
                    className="watchlist-button"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}
                  >
                    Add To Watchlist
                  </button>
                  <button
                    className="watched-button"
                    disabled={watchedDisabled}
                    onClick={() => addMovieToWatched(movie)}
                  >
                    Add To Watched
                  </button>
                  {watched.find((singleMovie) => singleMovie.id === movie.id) ||
                  watchlist.find(
                    (singleMovie) => singleMovie.id === movie.id
                  ) ? (
                    <button
                      className="delete-button"
                      onClick={() => removeMovie(movie)}
                    >
                      X
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Resultcard;
