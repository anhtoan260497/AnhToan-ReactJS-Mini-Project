import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import '../../animated/loading/animated.scss';
import './style.scss';

WeatherCondition.propTypes = {
  isLoadingCurrent : PropTypes.bool.isRequired,
  imagePath : PropTypes.array.isRequired,
  dataCurrent : PropTypes.array,
};

function WeatherCondition({ isLoadingCurrent, imagePath, dataCurrent }) {
  const isLoadingJSX = (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ); // JSX cho loading




  return (

    <div className="weather-condition-container">
      <div className="weather-icon">
       {!isLoadingCurrent ?  <img src={process.env.PUBLIC_URL + imagePath} alt="" /> : isLoadingJSX}
      </div>
      <div className="weather-condition-info">
        <div className="temp">
          {!isLoadingCurrent ? <><img className="icon" src={process.env.PUBLIC_URL + './animated/thermometer.svg'} alt="" />{' '}
          <span>{Math.floor(dataCurrent[0].main.temp - 273.15)} °C</span></> : isLoadingJSX }
        </div>
        <hr />
        <div className="name">
         { !isLoadingCurrent ?  <><img className="icon" src={process.env.PUBLIC_URL + imagePath[0]} alt="" /> <span>{dataCurrent[0].weather[0].description}</span></> : isLoadingJSX}
        </div>
        <hr />
        <div className="location">
        { !isLoadingCurrent ?  <><img className="icon" src={process.env.PUBLIC_URL + './animated/compass.svg'} alt="" />{' '}
          <span>{`${dataCurrent[0].name}, ${dataCurrent[0].sys.country}`}</span></> : isLoadingJSX}
        </div>
      </div>
    </div>
  );
}

export default WeatherCondition;
