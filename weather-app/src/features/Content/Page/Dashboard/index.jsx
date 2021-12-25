import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { useDispatch } from "react-redux";
import { getCurrent } from "../../../../app/currentLocationSlice";
import { useSelector } from "react-redux";
import WeatherCondition from "./components/WeatherCondition";
import WeatherPrediction from "./components/WeatherPrediction";
import useIQA from "../../../../hooks/useIQA";
import usePrediction from "../../../../hooks/usePrediction";

Dashboard.propTypes = {};

function Dashboard(props) {
  const API_key = process.env.REACT_APP_WEATHER_API_KEY;
  const API_key_IQA = process.env.REACT_APP_IQA_API_KEY;

  const [location, setLocation] = useState();
  const dispatch = useDispatch();

  const IQAData = useIQA(location, API_key_IQA);

  const choosenLocation = useSelector(
    (state) => state.getCurrentLocation.data.name
  );
  const country = useSelector(
    (state) => state.getCurrentLocation.data.sys?.country
  );
  const isLoading = useSelector((state) => state.getCurrentLocation.isLoading);

    const predictionData = usePrediction(location,API_key)  


   
  //  const a =  Date(1640318400)
  //  console.log(new Date(1640318400*1000).getDate())

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    if (!location) return;
    dispatch(getCurrent([location[0], location[1], API_key]));
  }, [dispatch, location, API_key]);

  return (
    <>
      <Search
        location={choosenLocation}
        country={country}
        isLoading={isLoading}
      />
      <div style={{display :'flex',gap :'2rem'}}>
        <WeatherCondition IQAData={IQAData} />
        <WeatherPrediction predictionData={predictionData}/>
      </div>
    </>
  );
}

export default Dashboard;
