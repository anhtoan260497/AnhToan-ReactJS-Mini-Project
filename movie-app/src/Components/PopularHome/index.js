import React, { useEffect } from "react";
import "./_PopularHome.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import useGetHomeMovies from "../../Hooks/useGetHomeMovies";
import { RightCircleOutlined } from "@ant-design/icons";

function PopularHome(props) {
  const API_Key =  process.env.REACT_APP_MOVIE_API_KEY
  const popularHome = useGetHomeMovies("popular",API_Key); // custome hook lấy Data theo type và API_Key

  const renderPopularHome = () => {
    return popularHome.map((item, idx) => {
      return (
        <div key={idx}>
          <Link to={`/${item.id}`}>
            <div className="filmcard-container">
              <img
                className="poster-image"
                src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
              />
              <h1 className="poster-name">{item.original_title}</h1>
            </div>
          </Link>
        </div>
      );
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          background: "gray",
          height: "7.5%",
          width: "1.2rem",
          borderRadius: "60%",
        }}
        className={className}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          background: "gray",
          height: "7.5%",
          width: "1.2rem",
          borderRadius: "60%",
        }}
        className={className}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div
      data-aos-once="true"
      data-aos="fade-down"
      className="popular-home-container"
    >
      <Link to="/Popular">
        <h1 className="link-popular">
          Popular Film <RightCircleOutlined />
        </h1>
      </Link>
      <Slider className="slider" {...settings}>
        {renderPopularHome()}
      </Slider>
    </div>
  );
}

export default PopularHome;
