import React from 'react';
import './style.scss';

function Navbar() {
  return (
    <div className="navbar-container-fluid">
      <div className="navbar-container">
        <div className="logo-area">
          <img src={process.env.PUBLIC_URL + '/animated/partly-cloudy-day.svg'} className="landing-logo" alt="" />
          <h1>Weather App</h1>
        </div>
        <div className="navigation-area">
          <input className="search-bar" placeholder="enter location name"/>
          <a href="##" className="about">About Me</a>
        </div>
        <div className="navigation-area-mobile">
        <input className="search-bar" placeholder="enter location name"/>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
