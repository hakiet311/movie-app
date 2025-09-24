import React from "react";

function PaginateIndicator({ dataMovies, setActiveMovieId, activedMovieId }) {
  return (
    <div className="absolute bottom-5 right-2 ">
      <ul className="*:w-6 *:h-1 *:md:w-12 *:md:h-2 *:bg-slate-600 flex gap-2 cursor-pointer  ">
        {dataMovies.map((movie) => (
          <li
            className={activedMovieId === movie.id ? "!bg-slate-100" : ""}
            key={movie.id}
            onClick={() => setActiveMovieId(movie.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default PaginateIndicator;
