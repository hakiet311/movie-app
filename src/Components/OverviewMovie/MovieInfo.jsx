import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ImageWithAnimation from "../ImageWithAnimation";
import { Link } from "react-router-dom";

function MovieInfo({ data, setIsShowing }) {
  const { id, title, overview, release_date, backdrop_path } = data;
  return (
    <>
      {/* <img
        className="aspect-video brightness-50 h-screen w-screen object-cover"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title}
      /> */}
      <ImageWithAnimation
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        className={"aspect-video brightness-50 h-screen w-screen object-cover"}
      ></ImageWithAnimation>
      <div className="absolute top-1/2 left-3 -translate-y-1/2  md:w-1/2 text-white space-y-4">
        <h1 className="font-bold md:text-2xl lg:text-3xl">{title}</h1>
        <div>
          <p className="text-slate-300 p-2 outline-2 inline-block mb-1">PG13</p>
          <p>{release_date}</p>
        </div>
        <div className="hidden sm:block">
          <h1 className="font-bold text-[2vw]">Overview</h1>
          <p>{overview}</p>
        </div>
        <div className="flex gap-3 *:cursor-pointer">
          <button
            className="bg-white text-black px-3 py-2 rounded-xl"
            onClick={() => setIsShowing(true)}
          >
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            Trailer
          </button>
          <Link to={`/movie/${id}`}>
            <button className="bg-slate-300/30 text-white px-3 py-2 rounded-xl cursor-pointer">
              View details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
