import React from 'react';
import './style.scss';
import Slider from 'react-slick';

function WeatherDays({ data7Days, imagePath7Days }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  }; // Slick control

  const renderData7Days = () => {
    if (!data7Days && imagePath7Days) return;
    return data7Days?.map((item, idx) => {
      return (
        <div key={idx}>
          <div className="weatherdays-item">
            <h1 className="weekday">{`${daysOfWeek[new Date(item?.dt * 1000).getDay()]} - ${new Date(
              item?.dt * 1000
            ).getDate()} - ${monthsOfYear[new Date(item?.dt * 1000).getMonth()]} `}</h1>
            <img className="weatherdays-icon" src={process.env.PUBLIC_URL + imagePath7Days[idx]} alt="" />
            <h1>{Math.floor(item?.temp?.eve - 273.15)} °C</h1>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="weatherdays-container-fluid">
      <div className="weatherdays-container">
        <div className="non-carousel">{renderData7Days()}</div>

        <div className="carousel">
          <Slider {...settings}>{renderData7Days()}</Slider>
        </div>
      </div>
    </div>
  );
}

export default WeatherDays;
