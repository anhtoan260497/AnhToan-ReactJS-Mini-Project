import React from "react";
import Navbar from '../Components/Navbar'
import Carousel from "../Components/Carousel";
import NowPlayingHome from "../Page/NowPlaying";
import PopularHome from "../Page/PopularHome";
import TopRated from "../Page/TopRated";
import UpcomingHome from "../Page/UpcomingHome";

function Home() {
  return (
    <div>
       <Navbar type="home" />
      <Carousel />
      <PopularHome />
      <NowPlayingHome />
      <UpcomingHome />  
      <TopRated />
    </div>
  );
}

export default Home;
