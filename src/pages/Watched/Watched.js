import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { MovieCard } from "../../components/MovieCard/MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <p className="no-movies">No movies in your list, Add some</p>
        )}
      </div>
    </div>
  );
};

export default Watched;
