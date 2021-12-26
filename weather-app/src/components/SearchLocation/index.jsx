import React from "react";
import { useRouteMatch } from "react-router-dom";
import Search from "../Search";
import useLocationWeather from "../../hooks/useLocationWeather";
import "./style.scss";
import { useEffect } from "react";
import { useState } from "react";
import useIQA from "../../hooks/useIQA";
import usePrediction from "../../hooks/usePrediction";
import WeatherPrediction from '../WeatherPrediction'
import WeatherCondition from '../WeatherCondition'

function SearchLocation(props) {
  const match = useRouteMatch();
  const API_key = process.env.REACT_APP_WEATHER_API_KEY;
  const API_key_IQA = process.env.REACT_APP_IQA_API_KEY;

  const keyword = match.params.name;

  const  [location,setLocation] = useState([])

  const IQAData = useIQA(location, API_key_IQA);

  const searchLocationWeatherData = useLocationWeather(keyword, API_key);

     const predictionData = usePrediction(location, API_key);

  useEffect(()=>{
    if(!searchLocationWeatherData?.weatherData?.coord) return
    const  {lat,lon} = searchLocationWeatherData?.weatherData?.coord
  setLocation([lat,lon])

  },[keyword,searchLocationWeatherData.weatherData.coord])







  return (
    <div>
      <Search 
      location={searchLocationWeatherData?.weatherData.name}
      country={searchLocationWeatherData?.weatherData?.sys?.country}
      isLoading={searchLocationWeatherData.isLoading}
      />
      <div style={{ display: "flex", gap: "2rem" }}>
        <WeatherCondition    
              dataWeather={searchLocationWeatherData.weatherData}
          isLoading={searchLocationWeatherData.isLoading}
          IQAData={IQAData}
        />
        <WeatherPrediction predictionData={predictionData}/>
      </div>
    </div>
  );
}

export default SearchLocation;
