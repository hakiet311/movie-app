import React, { useState } from "react";
import ImageWithAnimation from "../ImageWithAnimation";

function TvShowSeasons({ seasons = [] }) {
  const currentSeasons = seasons.slice(0, 2);
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="bg-slate-900 text-white p-6">
      <p className="font-bold md:text-xl lg:text-2xl mb-6">Seasons</p>
      {(isShowMore ? seasons : currentSeasons).map((season) => {
        return (
          <div
            className="border-2 w-full lg:w-2/3 rounded-lg overflow-hidden border-slate-600 grid md:grid-cols-4 grid-cols-1 text-white mb-6
            hover:scale-102 hover:shadow-2xl hover:shadow-slate-800 duration-300 transition-all
            "
            key={season.id}
          >
            <ImageWithAnimation
              src={
                season.poster_path
                  ? `${import.meta.env.VITE_API_IMG}${season.poster_path}`
                  : "/No_Image_Available.jpg"
              }
              className={
                "md:col-span-1 self-center justify-self-center h-[300px] w-[200px] object-cover object-center"
              }
            ></ImageWithAnimation>
            <div className="md:col-span-3 self-center p-3 col-span-full space-y-2">
              <p className="font-bold md:text-xl lg:text-2xl">{season.name}</p>
              <p>{season.air_date}</p>
              <p>{season.overview}</p>
            </div>
          </div>
        );
      })}
      {seasons.length > 2 && (
        <p
          className="cursor-pointer transition-all duration-300 hover:text-green-500 inline-block"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show less" : "Show more"}
        </p>
      )}
    </div>
  );
}

export default TvShowSeasons;
