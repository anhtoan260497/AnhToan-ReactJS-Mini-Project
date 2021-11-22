import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container-fluid">
      <div className="navbar-container">
        <Link to="/home">
          <div className="logo-area">
            <img src={process.env.PUBLIC_URL + '/animated/partly-cloudy-day.svg'} className="landing-logo" alt="" />
            <h1>Weather App</h1>
          </div>
        </Link>
        <div className="navigation-area">
          <input className="search-bar" placeholder="Enter location name" />
          <a href="##" className="about">
            About Me
          </a>
        </div>
        <div className="navigation-area-mobile">
          <input className="search-bar" placeholder="Enter location name" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
