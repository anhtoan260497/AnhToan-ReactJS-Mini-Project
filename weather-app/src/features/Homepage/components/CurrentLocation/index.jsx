import React from 'react';
import WeatherInfo from '../../../../components/WeatherInfo';
import './style.scss'

function CurrentLocation(props) {
    return (
        <div className="current-location-container">
            <WeatherInfo />
        </div>
    );
}

export default CurrentLocation;