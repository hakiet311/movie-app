import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import LoadingPage from "../../page/LoadingPage";

function MediaList({ title, tabs }) {
  const [movieList, setMovieList] = useState([]);
  const [activedTab, setActivedTab] = useState(tabs[0]?.id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmNkMzM1YzAxMjkyMTdiM2I2MDI3ODgyMmNhNDk4MCIsIm5iZiI6MTc1Nzc3NDc3Ny45Niwic3ViIjoiNjhjNTgzYjlhYjdlZjhhZDZlZGY5ZGQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8d0sVK2TJPOzFBr8ktB_pLDtqDp3Ynbw23Utqx8ZJEg`,
      },
    };

    const url = tabs.find((tab) => tab.id === activedTab)?.url;
    fetch(url, options).then(async (res) => {
      const data = await res.json();
      setMovieList(data.results);
      setLoading(false);
    });
  }, [tabs, activedTab]);

  if (loading) return <LoadingPage></LoadingPage>;
  return (
    <div className="bg-slate-800 text-white md:text-xl px-3 py-16 ">
      <div className="flex items-center gap-4 mb-8">
        <p className="md:text-xl lg:text-3xl font-bold">{title}</p>
        <ul className="flex items-center gap-4 border-2 border-white rounded px-1 *:cursor-pointer">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => {
                setActivedTab(tab.id);
                setLoading(true);
              }}
              className={
                tab.id === activedTab ? "bg-white text-black px-2 rounded" : ""
              }
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {movieList.map((movie) => {
          return (
            <MovieCard
              data={movie}
              key={movie.id}
              pathNameToLink={activedTab}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}

export default MediaList;
