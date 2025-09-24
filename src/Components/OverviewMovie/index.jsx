import React, { useContext, useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import MovieInfo from "./MovieInfo";
import LoadingPage from "../../page/LoadingPage";
import { ModalContext } from "../../Context/ModalProvider";
import { trailerVideo } from "../../constant";

function OverviewMovie() {
  const [dataMovies, setDataMovies] = useState([]);
  const [activedMovieId, setActiveMovieId] = useState();
  const [loading, setLoading] = useState(true);

  const { setIsShowing, setContent } = useContext(ModalContext);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    };

    fetch("https://api.themoviedb.org/3/movie/popular", options).then(
      async (res) => {
        const data = await res.json();
        const popularMovie = data.results.slice(10, 15);
        setDataMovies(popularMovie);
        setActiveMovieId(popularMovie[0].id);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (activedMovieId) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };
      fetch(
        `https://api.themoviedb.org/3/movie/${activedMovieId}/videos`,
        options
      ).then(async (res) => {
        const data = await res.json();
        const trailerKey = (data?.results || []).find(
          (item) => item.site === "YouTube" && item.type === "Trailer"
        )?.key;
        setContent(() => trailerVideo(trailerKey));
      });
    }
  }, [activedMovieId, setContent]);

  if (loading) return <LoadingPage></LoadingPage>;

  return (
    <div className="relative">
      {dataMovies
        .filter((movie) => movie.id === activedMovieId)
        .map((movie) => (
          <MovieInfo
            data={movie}
            key={movie.id}
            setIsShowing={setIsShowing}
          ></MovieInfo>
        ))}
      <PaginateIndicator
        dataMovies={dataMovies}
        setActiveMovieId={setActiveMovieId}
        activedMovieId={activedMovieId}
      ></PaginateIndicator>
    </div>
  );
}

export default OverviewMovie;
