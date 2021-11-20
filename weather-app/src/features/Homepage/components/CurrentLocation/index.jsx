import React, { useEffect, useState } from 'react';
import currentLocationWeatherApi from '../../../../api/currentLocationWeatherApi';
import WeatherInfo from '../../../../components/WeatherInfo';
import useClock from '../../../../hooks/useClock';
import './style.scss';

function CurrentLocation() {
  const API_key = process.env.REACT_APP_API_KEY;
  const { currentDate, isLoadingTime, isDay } = useClock(); // state  for clock
  const [isLoading, setIsLoading] = useState(true); // state for API loading
  const [currentLocation, setCurrentLocation] = useState(); // state for current location lat and lon
  const [data, setCurrentData] = useState(); // state for data 
  const [imagePath, setImagePath] = useState(); // get weather condition path at public animated

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []); // get current location [lat,lon]

  useEffect(() => {
    if (!currentLocation) return;
    const getCurrentLocationData = async () => {
      const data = await currentLocationWeatherApi.getData(currentLocation[0], currentLocation[1], API_key);
      console.log(data);
      setCurrentData(data);
      setIsLoading(false);
    };
    getCurrentLocationData();
  }, [currentLocation, API_key]);

  useEffect(() => {
    if (data) {
      switch (data.weather[0].id) {
        case 200:
        case 201:
        case 202:
        case 210:
          setImagePath('/animated/thunderstorms-rain.svg');
          break;
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          setImagePath('/animated/thunderstorms.svg');
          break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          setImagePath('/animated/drizzle.svg');
          break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
          setImagePath('/animated/rain.svg');
          break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          setImagePath('/animated/snow.svg');
          break;
        case 701:
          setImagePath('/animated/mist.svg');
          break;
        case 741:
          setImagePath('/animated/fog.svg');
          break;
        case 781:
          setImagePath('/animated/tornado.svg');
          break;
        case 800:
          if (isDay) {
            setImagePath('/animated/clear-day.svg');
          } else {
            setImagePath('/animated/clear-night/svg');
          }
          break;
        case 801:
        case 802:
        case 803:
        case 804:
          setImagePath('/animated/overcast.svg');
          break;
        default:
          return null;
      }
    }
  }, [data,isDay]);

  return (
    <div className="current-location-container">
      <WeatherInfo isLoading={isLoading} isLoadingTime={isLoadingTime} data={data} date={currentDate} imagePath={imagePath} />
    </div>
  );
}

export default CurrentLocation;
