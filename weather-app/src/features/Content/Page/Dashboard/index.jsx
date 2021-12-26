import React, { useEffect, useState } from "react";
import Search from "../../../../components/Search";
import WeatherCondition from "../../../../components/WeatherCondition";
import WeatherPrediction from "../../../../components/WeatherPrediction";
import useIQA from "../../../../hooks/useIQA";
import usePrediction from '../../../../hooks/usePrediction'
import useCurrentWeatherData from "../../../../hooks/useCurrentWeatherData";

Dashboard.propTypes = {};

function Dashboard(props) {
  const API_key = process.env.REACT_APP_WEATHER_API_KEY;
  const API_key_IQA = process.env.REACT_APP_IQA_API_KEY;

  const [location, setLocation] = useState([]);

  const IQAData = useIQA(location, API_key_IQA);

  
  const predictionData = usePrediction(location, API_key);

  const currentWeatherData = useCurrentWeatherData(location, API_key);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const chooseLocation = currentWeatherData?.currentWeatherData.name;
  const country = currentWeatherData?.currentWeatherData?.sys?.country;

  return (
    <>
      <Search
        location={chooseLocation}
        country={country}
        isLoading={currentWeatherData.isLoading}
      />
      <div style={{ display: "flex", gap: "2rem" }}>
        <WeatherCondition
          dataWeather={currentWeatherData.currentWeatherData}
          isLoading={currentWeatherData.isLoading}
          IQAData={IQAData}
        />
        <WeatherPrediction predictionData={predictionData} />
      </div>
    </>
  );
}

export default Dashboard;
