import React, { useState } from "react";
import ActorInfoCard from "./ActorInfoCard";
import InformationDetail from "./InformationDetail";

function ActorList({ actors = [], movieInfo }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = actors.slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-6 bg-slate-900 text-white gap-3">
      <div className="col-span-3">
        <h1 className="font-bold md:text-xl lg:text-2xl mb-4">Actor</h1>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {(isShowMore ? actors : currentActor)
            .filter((result) => result?.known_for_department === "Acting")
            // .slice(0, 8)
            .map((actor) => (
              <ActorInfoCard key={actor.id} infor={actor}></ActorInfoCard>
            ))}
        </div>
        {actors.length > 5 && (
          <p
            className="hover:text-green-500 transition-all duration-300 cursor-pointer mt-6 text-center"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? "Show less" : "Show more"}
          </p>
        )}
      </div>
      <div className="col-span-1 ">
        <p className="font-bold md:text-xl lg:text-2xl">Information</p>
        <div>
          <InformationDetail data={movieInfo}></InformationDetail>
        </div>
      </div>
    </div>
  );
}

export default ActorList;
