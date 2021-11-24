import React from 'react';
import './style.scss';
import PropsTypes from 'prop-types';

Navbar.PropsTypes = {
  onHandleInput: PropsTypes.func.isRequired,
  onSubmitInputSearch :PropsTypes.func.isRequired,
  search : PropsTypes.string,
  backToCurrentWeather:PropsTypes.func.isRequired
};

Navbar.defaultProps = {
  search : null 
};

function Navbar({ onHandleInput,onSubmitInputSearch, backToCurrentWeather, search }) {
  return (
    <div className="navbar-container-fluid">
      <div onClick={backToCurrentWeather} className="navbar-container">
          <div className="logo-area">
            <img src={process.env.PUBLIC_URL + '/animated/partly-cloudy-day.svg'} className="landing-logo" alt="" />
            <h1>Weather App</h1>
          </div>
        <div className="navigation-area">
          <form onSubmit={e => onSubmitInputSearch(e)}>
            <input className="search-bar" name="search" placeholder="Enter location name" value={search} onChange={(e) => onHandleInput(e)} />
          </form>
          <a href="https://github.com/anhtoan260497" target="_blank" className="about" rel="noreferrer">
            About Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
