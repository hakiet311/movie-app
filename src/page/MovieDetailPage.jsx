import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import LoadingPage from "./LoadingPage";
import ActorList from "../Components/MovieDetail/ActorList";
import RealtedMediaList from "../Components/MovieDetail/RealtedMediaList";
import useFetch from "../hooks/useFetch";

function MovieDetailPage() {
  const { id } = useParams();

  const { data: movieInfo, isLoading: isLoadingMovieInfo } = useFetch(
    `/movie/${id}?append_to_response=release_dates,credits,videos`
  );
  const {
    data: movieRecommendations,
    isLoading: isLoadingMovieRecommendations,
  } = useFetch(`/movie/${id}}/recommendations`);

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
        </div>
      )}
      <RealtedMediaList
        list={movieRecommendations?.results}
        isLoadingMovieRecommendations={isLoadingMovieRecommendations}
      ></RealtedMediaList>
    </>
  );
}

export default MovieDetailPage;
