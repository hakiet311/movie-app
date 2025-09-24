import React from "react";
import ImageWithAnimation from "../ImageWithAnimation";
import { Link } from "react-router-dom";

function ActorInfoCard({ infor }) {
  const { id, profile_path, name, character } = infor;
  return (
    <Link to={`/person/${id}`}>
      <div className="bg-slate-800 text-white rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:cursor-pointer">
        {/* <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : `/No_Image_Available.jpg`
        }
        alt={name}
        loading="lazy"
        className="w-full h-[250px] object-cover object-center"
      /> */}
        <ImageWithAnimation
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original${profile_path}`
              : `/No_Image_Available.jpg`
          }
          alt={name}
          className={"w-full h-[250px] object-cover object-center"}
        ></ImageWithAnimation>
        <div className="p-3 space-y-2">
          <p className="font-bold">{name}</p>
          <p>Charecter: {character}</p>
        </div>
      </div>
    </Link>
  );
}

export default ActorInfoCard;
