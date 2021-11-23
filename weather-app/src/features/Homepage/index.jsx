import React, { useEffect, useState } from 'react';
import curentWeatherApi from '../../api/currentWeatherApi';
import Navbar from '../../components/Navbar';
import WeatherDays from '../../components/WeatherDays';
import WeatherInfo from '../../components/WeatherInfo';
import useClock from '../../hooks/useClock';
import useImagePath from '../../hooks/useImagePath';

function Homepage() {
  const API_key = process.env.REACT_APP_API_KEY;
  const { isDay } = useClock(); // state  for clock
  const [isLoadingCurrent, setIsLoadingCurrent] = useState(true); // state for API loading
  const [isLoading7Days,setIsLoading7Days] =useState(true)

  const [currentLocation, setCurrentLocation] = useState(); // state for current location lat and lon

  const [dataCurrent, setCurrentDataCurrent] = useState(); // state for data current
  const [data7Days,setData7Days] = useState([]) // state for data 7 days

  const imagePath = useImagePath(dataCurrent,isDay)
  const imagePath7Days = useImagePath(data7Days,isDay); // get weather condition path at public animated

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []); // get current location [lat,lon]

  useEffect(() => {
    if (!currentLocation) return;
    const getCurrentLocationData = async () => {
      const data = await curentWeatherApi.getData(currentLocation[0], currentLocation[1], API_key);
      setCurrentDataCurrent([data]);
      setIsLoadingCurrent(false);
    };
    getCurrentLocationData();
  }, [currentLocation, API_key]); // getData current day

  useEffect(() => {
    if (!currentLocation) return;
    const get7DaysData = async () => {
      const data = await curentWeatherApi.get7DaysData(currentLocation[0], currentLocation[1], API_key);
      setData7Days(data.daily);
      setIsLoading7Days(false);
    };
    get7DaysData();
  }, [currentLocation, API_key])

  
  return (
    <div>
      <Navbar />
      <WeatherInfo isDay={isDay} isLoadingCurrent={isLoadingCurrent} imagePath={imagePath} imagePath7Days={imagePath7Days} dataCurrent={dataCurrent} data7Days={data7Days} />
    </div>
  );
}

export default Homepage;
