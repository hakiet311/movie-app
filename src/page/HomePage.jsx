import Header from "../Components/Header";
import MediaList from "../Components/MediaList";
import OverviewMovie from "../Components/OverviewMovie";
import { TABS_TOPRATED, TABS_TRENDING } from "../constant";

function HomePage() {
  return (
    <div>
      <OverviewMovie></OverviewMovie>
      <MediaList title={"Trending"} tabs={TABS_TRENDING}></MediaList>
      <MediaList title={"Top rated"} tabs={TABS_TOPRATED}></MediaList>
    </div>
  );
}

export default HomePage;
