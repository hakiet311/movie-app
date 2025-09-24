import React, { useState } from "react";
import MovieCard from "../MediaList/MovieCard";

function MediaListBaseOnActor({ data, pathName }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentData = (data?.cast || []).slice(0, 4);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {(isShowMore ? data?.cast || [] : currentData).map((item) => (
          <MovieCard
            key={item.credit_id}
            data={item}
            pathNameToLink={pathName}
          ></MovieCard>
        ))}
      </div>
      <p
        className="hover:text-green-500 duration-300 cursor-pointer mt-3"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {(data?.cast || []).length > 4
          ? isShowMore
            ? "Show less"
            : "Show more"
          : ""}
      </p>
    </div>
  );
}

export default MediaListBaseOnActor;
