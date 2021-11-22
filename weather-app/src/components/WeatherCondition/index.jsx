import React, { useEffect } from 'react';
import './style.scss';
import '../../animated/loading/animated.scss';
import PropTypes from 'prop-types';

WeatherCondition.propTypes = {
  isLoading : PropTypes.bool.isRequired,
  imagePath : PropTypes.string.isRequired,
  data : PropTypes.object
};

function WeatherCondition({ isLoading, imagePath, data }) {
  const isLoadingJSX = (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ); // JSX cho loading
  useEffect(() => {
    console.log(data);
    console.log(isLoading)
  }, [isLoading]);


  return (

    <div className="weather-condition-container">
      <div className="weather-icon">
       {!isLoading ?  <img src={process.env.PUBLIC_URL + imagePath} alt="" /> : isLoadingJSX}
      </div>
      <div className="weather-condition-info">
        <div className="temp">
          {!isLoading ? <><img className="icon" src={process.env.PUBLIC_URL + './animated/thermometer.svg'} alt="" />{' '}
          <span>{Math.floor(data.main.temp - 273.15)} °C</span></> : isLoadingJSX }
        </div>
        <hr />
        <div className="name">
         { !isLoading ?  <><img className="icon" src={process.env.PUBLIC_URL + imagePath} alt="" /> <span>{data.weather[0].description}</span></> : isLoadingJSX}
        </div>
        <hr />
        <div className="location">
        { !isLoading ?  <><img className="icon" src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/compass.svg" alt="" />{' '}
          <span>{`${data.name}, ${data.sys.country}`}</span></> : isLoadingJSX}
        </div>
      </div>
    </div>
  );
}

export default WeatherCondition;
