import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import PersonalInfo from "../Components/Actor/PersonalInfo";
import Biography from "../Components/Actor/Biography";
import ImageWithAnimation from "../Components/ImageWithAnimation";
import LoadingPage from "./LoadingPage";
import MediaListBaseOnActor from "../Components/Actor/MediaListBaseOnActor";

function ActorPage() {
  const { id } = useParams();
  const { data: dataPerson, isLoading } = useFetch(`/person/${id}`);
  const { data: dataMovie } = useFetch(`/person/${id}/movie_credits`);
  const { data: dataTVShow } = useFetch(`/person/${id}/tv_credits`);

  if (isLoading) return <LoadingPage></LoadingPage>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 mt-12 p-6 bg-slate-900 text-white gap-6">
      <div className="md:col-span-2 space-y-3">
        <ImageWithAnimation
          src={`${import.meta.env.VITE_API_IMG}${dataPerson?.profile_path}`}
        ></ImageWithAnimation>
        <div>
          <PersonalInfo data={dataPerson}></PersonalInfo>
        </div>
      </div>
      <div className="md:col-span-4 space-y-6">
        <div>
          <Biography data={dataPerson}></Biography>
        </div>
        <div className="space-y-6">
          <div>
            <p className="font-bold md:text-xl lg:text-2xl mb-6">
              Know for Movie
            </p>
            <MediaListBaseOnActor
              data={dataMovie}
              pathName={"movie"}
            ></MediaListBaseOnActor>
          </div>
          <div>
            <p className="font-bold md:text-xl lg:text-2xl mb-6">
              Know for TV Show
            </p>
            <MediaListBaseOnActor
              data={dataTVShow}
              pathName={"tv"}
            ></MediaListBaseOnActor>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActorPage;
