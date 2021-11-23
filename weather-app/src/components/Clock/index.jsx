import React from 'react';
import useClock from '../../hooks/useClock';
import './style.scss'

function Clock() {

    const {date,day,month,year,time, isLoadingTime} = useClock()
const isLoadingJSX = (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

    return (
        <div className="time-container-fluid">
           {isLoadingTime ? isLoadingJSX : <div className="time-container">
                <p>{`${date}  ${day} - ${month+1} - ${year} | ${time}` }</p>
            </div>}
            
        </div>
    );
}

export default Clock;