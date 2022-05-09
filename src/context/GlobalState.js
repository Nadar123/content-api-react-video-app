import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialstate = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addToWatchedList = (movie) => {
    dispatch({ type: "ADD_TO_WATCHED_LIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED_LIST", payload: id });
  };
  const addMovieToWatch = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH", payload: movie });
  };
  const moveToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie });
  };
  const removeFormWatcted = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchedList,
        removeMovieFromWatchList,
        addMovieToWatch,
        moveToWatchList,
        removeFormWatcted,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
