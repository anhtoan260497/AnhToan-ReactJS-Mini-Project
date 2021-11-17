import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

WeatherInfo.propTypes = {};

function WeatherInfo(props) {
  return (
    <div className="weather-info-container">
      <div className="weather-icon">
        <div className="weather-condition">Sunny</div>
        <img src={process.env.PUBLIC_URL + "/animated/clear-day.svg"} alt="" />
        <div className="weather-temp">19 °C</div>
      </div>
      <div className="weather-information">
        
      </div>
    </div>
  );
}

export default WeatherInfo;
