import React, { useEffect, useState } from 'react';
import '../../animated/loading/animated.scss';
import Clock from '../Clock';
import WeatherCondition from '../WeatherCondition';
import './style.scss';
import PropTypes from 'prop-types'
import WeatherDays from '../WeatherDays';

WeatherInfo.propTypes = {
  isDay : PropTypes.bool.isRequired,
  isLoadingCurrent : PropTypes.bool.isRequired,
  imagePath : PropTypes.array.isRequired,
  dataCurrent : PropTypes.array,
  data7Days : PropTypes.array.isRequired,
  imagePath7Days : PropTypes.array.isRequired
};


function WeatherInfo({isDay,isLoadingCurrent, imagePath,dataCurrent ,data7Days,imagePath7Days}) {

  const [backgroundImage, setbackgroundImage] = useState('weather-info-container');

  useEffect(() => {
    if (isDay) {
      setbackgroundImage('weather-info-container day-background');
    } else {
      setbackgroundImage('weather-info-container night-background');
    }
  }, [isDay]);

  return (
    <div className={backgroundImage}>
      <div className="linear-background">
        <Clock/>
        <WeatherCondition isLoadingCurrent={isLoadingCurrent} imagePath={imagePath} dataCurrent={dataCurrent}/>
        <WeatherDays data7Days={data7Days} imagePath7Days={imagePath7Days}/>
      </div>
    </div>
  );
}

export default WeatherInfo;
