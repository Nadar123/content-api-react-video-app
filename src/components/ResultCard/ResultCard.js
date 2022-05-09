import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addToWatchedList, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((watch) => watch.id === movie.id);

  const disabledstoredMovie = storedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date.substring(0, 4)}</h4>
        </div>
        <div className="controls">
          <button
            disabled={disabledstoredMovie}
            className="btn"
            onClick={() => addToWatchedList(movie)}
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
