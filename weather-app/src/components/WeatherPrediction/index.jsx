import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import WeatherInfo from '../WeatherInfo';

WeatherPrediction.propTypes = {
    
};

function WeatherPrediction({predictionData}) {
    
    const renderWeather = () => {
        return  predictionData.data.map((el,idx) =>  <WeatherInfo key={idx} predictionData={el}/>)
    }

    return (
        <div className='prediction_container--area'>
            {!predictionData.isLoading ? renderWeather() : <img style={{margin: '35vh 0',width: '10%'}} src={process.env.PUBLIC_URL + 'loading.gif'} alt='' />}
            
        </div>
    );
}

export default WeatherPrediction;