// import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./_Carousel.scss";
import { Link } from "react-router-dom";
import useNowPlaying from "../../Hooks/useNowPlaying";

function CarouselSlide() {
  const API_Key =  process.env.REACT_APP_MOVIE_API_KEY
  const nowPlaying = useNowPlaying(API_Key)
  

  const renderCarousel = () => {
   return  nowPlaying.map((item,idx) => {
     return (<div key={idx} >
      <Link to={`/${item.id}`}>
        <div className="poster-container">
          <img
            className="img-carousel-poster"
            src={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt=""
          />
          <div className="poster-detail">
            <h1 className="poster-title">{item.original_title}</h1>
            <p className="poster-description">
             {item.overview}
            </p>
          </div>
        </div>
      </Link>
    </div>)
   })
  };

  return (
    <Carousel className="carousel-container" autoplay effect="fade">
      {renderCarousel()}
    
    </Carousel>
  );
}

export default CarouselSlide;
