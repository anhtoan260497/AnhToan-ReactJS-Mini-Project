import React from "react";
import Navbar from '../Components/Navbar'
import Carousel from "../Components/Carousel";
import NowPlayingHome from "../Components/NowPlaying";
import PopularHome from "../Components/PopularHome";
import TopRated from "../Components/TopRated";
import UpcomingHome from "../Components/UpcomingHome";

function Home() {
  return (
    <div>
       <Navbar pageType="home" />
      <Carousel />
      <PopularHome />
      <NowPlayingHome />
      <UpcomingHome />  
      <TopRated />
    </div>
  );
}

export default Home;
