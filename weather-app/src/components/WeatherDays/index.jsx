import React, { useEffect } from 'react';
import './style.scss';

function WeatherDays({ data7Days,imagePath7Days }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

  useEffect(()=>{
    console.log(data7Days)
  },[data7Days])

  const renderData7Days = () =>{
    if(!data7Days && imagePath7Days) return
    return data7Days.map((item,idx)=>{
      return (
        <>
        <div className="weatherdays-item" key={idx}>
        <h1 className="weekday">{`${daysOfWeek[new Date(item.dt*1000).getDay()]} - ${new Date(item.dt*1000).getDate()} - ${monthsOfYear[new Date(item.dt*1000).getMonth()]} `}</h1>
        <img className="weatherdays-icon" src={process.env.PUBLIC_URL + imagePath7Days[idx]} alt="" />
        <h1>{Math.floor(item.temp.eve - 273.15)} °C</h1>
      </div>
      </>
      )
     
    })
  }

  return (
    <div className="weatherdays-container-fluid">
      <div className="weatherdays-container">
       {renderData7Days()}
      </div>
    </div>
  );
}

export default WeatherDays;
