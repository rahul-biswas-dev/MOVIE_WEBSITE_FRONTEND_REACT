// src/MovieList.js

import  MovieCard from "./Cart";

const MovieList = ({ movies }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {movies.map((movie, index) => (
        <div className="min-w-[16.66%] flex-shrink-0" key={index}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
