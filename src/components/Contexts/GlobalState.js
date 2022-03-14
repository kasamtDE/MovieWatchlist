import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const removeMovie = (movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: movie });
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie });
  };
  const removeMoviefromWatched = (movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: movie });
  };
  const removeMoviefromWatchList = (movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie });
  };

  const addMovieToWatchlist = (movie) => {
    const getSameMovie = state.watchlist.find(
      (singleMovie) => singleMovie.id === movie.id
    );
    if (getSameMovie) {
      return;
    }
    const checkWatched = state.watched.find(
      (singleMovie) => singleMovie.id === movie.id
    );

    if (checkWatched) {
      dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
    }
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    const getSameMovie = state.watched.find(
      (singleMovie) => singleMovie.id === movie.id
    );

    if (getSameMovie) {
      return;
    }
    const checkWatchlist = state.watchlist.find(
      (singleMovie) => singleMovie.id === movie.id
    );

    if (checkWatchlist) {
      dispatch({ type: "MOVE_TO_WATCHED", payload: movie });
    }
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        addMovieToWatched,
        removeMoviefromWatchList,
        removeMoviefromWatched,
        removeMovie,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
