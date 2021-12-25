import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import WeatherInfo from '../../../../../../components/WeatherInfo';

WeatherPrediction.propTypes = {
    
};

function WeatherPrediction({predictionData}) {
    
    const renderWeather = () => {
        return  predictionData.map((el,idx) =>  <WeatherInfo key={idx} predictionData={el}/>)
    }

    return (
        <div className='prediction_container--area'>
            {predictionData.length > 0 ? renderWeather() : null}
            
        </div>
    );
}

export default WeatherPrediction;