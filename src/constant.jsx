const TABS_TRENDING = [
  {
    id: "all",
    name: "All",
    url: "https://api.themoviedb.org/3/trending/all/day",
  },
  {
    id: "movie",
    name: "Movie",
    url: "https://api.themoviedb.org/3/trending/movie/day",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "https://api.themoviedb.org/3/trending/tv/day",
  },
  {
    id: "person",
    name: "People",
    url: "https://api.themoviedb.org/3/trending/person/day",
  },
];

const TABS_TOPRATED = [
  {
    id: "movie",
    name: "Movie",
    url: "https://api.themoviedb.org/3/movie/top_rated",
  },
  {
    id: "tv",
    name: "TV Show",
    url: "https://api.themoviedb.org/3/tv/top_rated",
  },
];

const changeToCurrency = (value, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(value);
};

const trailerVideo = (key) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${key}`}
      title="trailer"
      className="aspect-video w-full"
    ></iframe>
  );
};
export { TABS_TRENDING, TABS_TOPRATED, changeToCurrency, trailerVideo };
