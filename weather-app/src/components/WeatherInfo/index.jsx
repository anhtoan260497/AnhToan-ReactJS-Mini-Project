import React, { useEffect, useState } from 'react';
import '../../animated/loading/animated.scss';
import Clock from '../Clock';
import WeatherCondition from '../WeatherCondition';
import './style.scss';
import PropTypes from 'prop-types'

WeatherInfo.propTypes = {
  isDay : PropTypes.bool.isRequired,
  isLoading : PropTypes.bool.isRequired,
  imagePath : PropTypes.string.isRequired,
  data : PropTypes.object.isRequired,
};


function WeatherInfo({isDay,isLoading, imagePath,data }) {

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
        <WeatherCondition isLoading={isLoading} imagePath={imagePath} data={data}/>
      </div>
    </div>
  );
}

export default WeatherInfo;
