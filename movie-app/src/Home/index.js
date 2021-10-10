import React from "react";
import Carousel from "../Components/Carousel";
import NowPlayingHome from "../Components/NowPlaying";
import PopularHome from "../Components/PopularHome";
import TopRated from "../Components/TopRated";
import UpcomingHome from "../Components/UpcomingHome";

function Home(props) {
  return (
    <div>
      <Carousel />
      <PopularHome />
      <NowPlayingHome />
      <UpcomingHome />  
      <TopRated />
    </div>
  );
}

export default Home;
