import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "../../components/MovieCard/MovieCard";
const WatchedList = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);

  // return (
  //   <div className="movie-page">
  //     <div className="container">
  //       <div className="header"></div>

  //       {watchlist.length > 0 ? (
  //         <div className="movie-grid">
  //           {watchlist.map((movie) => (
  //             <MovieCard movie={movie} key={movie.id} type="watchlist" />
  //           ))}
  //         </div>
  //       ) : (
  //         <p className="no-movies">No movies in your list! Add some!</p>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

export default WatchedList;
