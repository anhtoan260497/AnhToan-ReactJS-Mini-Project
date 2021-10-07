import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./_Carousel.scss";
import { Link } from "react-router-dom";
import useNowPlaying from "../../Hooks/useNowPlaying";

function CarouselSlide(props) {
  const nowPlaying = useNowPlaying();
  console.log(nowPlaying);

  return (
    <Carousel className="carousel-container" autoplay effect="fade">
      <div>
        <Link to="/550988">
          <div className="poster-container">
            <img
              className="img-carousel-poster"
              src="http://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"
              alt=""
            />
          </div>
        </Link>
      </div>
    </Carousel>
  );
}

export default CarouselSlide;
