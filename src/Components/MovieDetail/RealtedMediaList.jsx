import React, { useState } from "react";
import MovieCard from "../MediaList/MovieCard";
import LoadingPage from "../../page/LoadingPage";

function RealtedMediaList({ list = [], isLoadingMovieRecommendations }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentList = list.slice(0, 6);
  if (isLoadingMovieRecommendations) return <LoadingPage></LoadingPage>;
  return (
    <div className="bg-slate-900 p-6 text-white">
      <p className="md:text-xl lg:text-2xl font-bold mb-6">More like this</p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {(isShowMore ? list : currentList).map((item) => (
          <MovieCard key={item.id} data={item}></MovieCard>
        ))}
      </div>
      <p
        onClick={() => setIsShowMore(!isShowMore)}
        className="hover:text-green-500 transition-all duration-300 cursor-pointer mt-6 text-center"
      >
        {list.length > 6 ? (isShowMore ? "Show less" : "Show more") : ""}
      </p>
    </div>
  );
}

export default RealtedMediaList;
