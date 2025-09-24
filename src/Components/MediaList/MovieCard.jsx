import CircleProgressBar from "./CircleProgressBar";
import { Link } from "react-router-dom";
import ImageWithAnimation from "../ImageWithAnimation";

function MovieCard({ data, pathNameToLink }) {
  const {
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    original_name,
    media_type,
    profile_path,
    first_air_date,
    known_for_department,
  } = data;

  return (
    <Link to={media_type ? `/${media_type}/${id}` : `/${pathNameToLink}/${id}`}>
      <div className="bg-slate-700 inline-block rounded-2xl overflow-hidden hover:scale-102 transition-all duration-300 shadow-lg shadow-[5.5px_3px_10px_3px_rgb(0 0 0)] relative w-full h-full">
        {pathNameToLink === "movie" && (
          <p className="absolute top-0 right-0 px-3 py-1 bg-slate-700/60 rounded-md z-10">
            Movie
          </p>
        )}
        {pathNameToLink === "tv" && (
          <p className="absolute top-0 right-0 px-3 py-1 bg-slate-700/60 rounded-md z-10">
            TV Show
          </p>
        )}
        {pathNameToLink === "person" && (
          <p className="absolute top-0 right-0 px-3 py-1 bg-slate-700/60 rounded-md z-10">
            Person
          </p>
        )}

        {/*  */}
        {media_type === "movie" && (
          <p className="absolute top-0 right-0 px-3 py-1 bg-slate-700/60 rounded-md z-10">
            Movie
          </p>
        )}
        {media_type === "tv" && (
          <p className="absolute top-0 right-0 px-3 py-1 bg-slate-700/60 rounded-md z-10">
            TV Show
          </p>
        )}
        {media_type === "person" && (
          <p className="absolute top-0 right-0 px-3 py-1 bg-slate-700/60 rounded-md z-10">
            Person
          </p>
        )}

        <ImageWithAnimation
          src={
            poster_path || profile_path
              ? `https://image.tmdb.org/t/p/original${
                  poster_path || profile_path
                }`
              : `${import.meta.env.VITE_BASE_URL}No_Image_Available.jpg`
          }
          alt={title}
          className={"object-cover object-center w-full h-full"}
        ></ImageWithAnimation>
        <div className="p-3">
          {vote_average && (
            <CircleProgressBar percent={vote_average}></CircleProgressBar>
          )}
          <p className="font-bold ">{title || original_name}</p>
          <p className="font-mono text-sm">
            {release_date || first_air_date || known_for_department}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
