import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import CircleProgressBar from "../MediaList/CircleProgressBar";
import ImageWithAnimation from "../ImageWithAnimation";
import { ModalContext } from "../../Context/ModalProvider";
import { trailerVideo } from "../../constant";

function MovieDetail({ movieInfo }) {
  const {
    backdrop_path,
    name,
    vote_average,
    overview,
    poster_path,
    release_date,
    genres,
    title,
  } = movieInfo;

  const { setIsShowing, setContent } = useContext(ModalContext);
  const certificate = (movieInfo?.content_ratings?.results || []).find(
    (item) => item.iso_3166_1 === "US" || item.iso_3166_1 === "ES"
  )?.rating;

  const director = (
    (movieInfo?.credits?.crew || []).filter(
      (result) => result?.known_for_department === "Directing"
    ) || []
  )
    .map((result) => result?.name)
    .slice(0, 3)
    .join(", ");

  const writer = (
    (movieInfo?.credits?.crew || []).filter(
      (result) => result?.known_for_department === "Writing"
    ) || []
  )
    .map((result) => result?.name)
    .slice(0, 3)
    .join(", ");

  const trailer = (movieInfo?.videos?.results || []).find(
    (item) => item.type === "Trailer" && item.site === "YouTube"
  );

  return (
    <div>
      <div className="relative">
        {/* <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
          className="h-screen w-full object-cover object-top brightness-25 aspect-video"
        /> */}
        <ImageWithAnimation
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          className={
            "h-screen w-full object-cover object-top brightness-25 aspect-video"
          }
        ></ImageWithAnimation>
        <div className="absolute top-0 left-0 p-8 grid grid-cols-3 gap-3 text-white *:self-center">
          {/* <img
            className="hidden md:col-span-1 md:block w-[90%] m-auto rounded-xl"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          /> */}
          <ImageWithAnimation
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            className={
              "hidden md:col-span-1 md:block w-[90%] m-auto rounded-xl"
            }
          ></ImageWithAnimation>
          <div className="col-span-3 md:col-span-2 space-y-4 m-auto mt-24">
            <p className="text-xl md:text-2xl lg:text-4xl font-bold">
              {title || name}
            </p>
            <div className="flex items-center gap-6">
              <p className="p-3 border-2 border-white md:text-xl">
                {certificate}
              </p>
              <p>{release_date}</p>
              <p>{genres?.map((gen) => gen.name).join(", ")}</p>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex gap-2 items-center">
                <CircleProgressBar percent={vote_average}></CircleProgressBar>
                <p className="md:text-xl">Rating</p>
              </div>
              <button
                className="bg-white text-black px-3 py-2 rounded-xl cursor-pointer"
                onClick={() => {
                  setIsShowing(true);
                  setContent(() => {
                    return trailerVideo(trailer?.key);
                  });
                }}
              >
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                Trailer
              </button>
            </div>
            <div>
              <p className="font-bold md:text-2xl">Overview</p>
              <p>{overview}</p>
            </div>
            <div className=" flex items-center gap-42">
              <div>
                <p className="font-bold md:text-xl">Director</p>
                <p>{director}</p>
              </div>
              <div>
                <p className="font-bold md:text-xl">Writer</p>
                <p>{writer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
