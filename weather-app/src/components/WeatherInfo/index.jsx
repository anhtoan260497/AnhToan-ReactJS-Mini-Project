import PropsTypes from 'prop-types';
import React from 'react';
import '../../animated/loading/animated.scss'
import './style.scss';

WeatherInfo.propTypes = {
  isLoading : PropsTypes.bool.isRequired,
  isLoadingTime : PropsTypes.bool.isRequired,
  data : PropsTypes.object,
  imagePath :PropsTypes.string
};

WeatherInfo.defaultProps = {
  data : null,
  imagePath : null
}

function WeatherInfo({isLoading,data,isLoadingTime,date,imagePath}) {

  const isLoadingJSX = (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ); // JSX cho loading

  return (
<div></div>
  );
}

export default WeatherInfo;
