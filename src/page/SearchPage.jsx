import React, { useState } from "react";
import FormSearch from "../Components/SearchPage/FormSearch";
import useFetch from "../hooks/useFetch";
import MovieCard from "../Components/MediaList/MovieCard";

function SearchPage() {
  const [dataSearch, setDataSearch] = useState({
    mediaType: "movie",
    genresID: [],
    ratingSelect: "0-100",
  });

  const [min, max] = dataSearch.ratingSelect.split("-");
  const { data } = useFetch(
    `/discover/${dataSearch.mediaType}?with_genres=${dataSearch.genresID.join(
      ","
    )}&vote_average.gte=${min / 10}&vote_average.lte=${max / 10}`
  );

  return (
    <div className=" bg-slate-900 text-white p-6">
      <h1 className="font-bold md:text-xl lg:text-2xl mb-4">Search</h1>
      <div className="grid grid-cols-4 gap-3">
        <div className="md:col-span-1 col-span-full">
          <FormSearch setDataSearch={setDataSearch}></FormSearch>
        </div>
        <div className="md:col-span-3 col-span-full">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {(data?.results || []).map((item) => (
              <MovieCard
                key={item?.id}
                data={item}
                pathNameToLink={dataSearch.mediaType}
              ></MovieCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
