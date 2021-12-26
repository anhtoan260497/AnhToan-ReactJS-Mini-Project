import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { useSelector } from "react-redux";
import useSVGIcon from "../../hooks/useSVGIcon";
import clsx from "clsx";

WeatherInfo.propTypes = {};

function WeatherInfo({ predictionData }) {
  const isDay = useSelector((state) => state.isDay.isDay);

  const date = new Date(predictionData.dt * 1000).getDate();
  const month = new Date(predictionData.dt * 1000).getMonth() + 1;
  const year = new Date(predictionData.dt * 1000).getFullYear();

  const svgPath = useSVGIcon(predictionData.weather[0].id, isDay);

  return (
    <div
      className={clsx("weather_info--container", {
        "dark-weather-container": !isDay ? true : false,
      })}
    >
      <img
        style={{ width: "15%" }}
        src={process.env.PUBLIC_URL + svgPath}
        alt=""
      />
      <div className="weather_info--display">
        <p>
          {date}/{month}/{year}
        </p>
        <h2>{predictionData.weather[0].description}</h2>
      </div>
      <div className="weather_info--temp">
        {Math.trunc(predictionData.temp.eve - 273.15)}°C /{" "}
        {Math.trunc(predictionData.temp.max - 273.15)}°C
      </div>
    </div>
  );
}

export default WeatherInfo;
