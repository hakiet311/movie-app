import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import LoadingPage from "./LoadingPage";
import ActorList from "../Components/MovieDetail/ActorList";
import RealtedMediaList from "../Components/MovieDetail/RealtedMediaList";
import useFetch from "../hooks/useFetch";
import TvShowSeasons from "../Components/TVShow/TvShowSeasons";

function TVShowPage() {
  const { id } = useParams();

  const { data: movieInfo, isLoading: isLoadingMovieInfo } = useFetch(
    `/tv/${id}?append_to_response=content_ratings,credits,videos`
  );
  const {
    data: movieRecommendations,
    isLoading: isLoadingMovieRecommendations,
  } = useFetch(`/tv/${id}}/recommendations`);

  return (
    <>
      {isLoadingMovieInfo ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div>
          <MovieDetail movieInfo={movieInfo}></MovieDetail>
          <ActorList
            actors={movieInfo?.credits?.cast}
            movieInfo={movieInfo}
          ></ActorList>
          {movieInfo.seasons && (
            <div>
              <TvShowSeasons seasons={movieInfo.seasons}></TvShowSeasons>
            </div>
          )}
        </div>
      )}
      <RealtedMediaList
        list={movieRecommendations?.results}
        isLoadingMovieRecommendations={isLoadingMovieRecommendations}
      ></RealtedMediaList>
    </>
  );
}

export default TVShowPage;
