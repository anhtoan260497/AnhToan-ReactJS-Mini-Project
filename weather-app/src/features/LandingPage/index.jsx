import React from "react";
import "./style.scss";
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-background-color"></div>
      <div className="landing-background-image">
        <img src={process.env.PUBLIC_URL + "/images/landing-bg.jpg"} alt="" />
      </div>
      <div className="nav-logo">
      <img src={process.env.PUBLIC_URL + "/images/landing-logo.png"} className="landing-logo" alt="" /><span>Weather App</span>
      </div>
      <div className="landing-description">
          <img src={process.env.PUBLIC_URL + "/images/landing-logo.png"} className="landing-logo" alt="" />
          <div className="description">
            <h1>Weather App</h1>
            <p>Where You Get Your Weather Matters</p>
          </div>
          <Link to="/home"><button className="get-started-btn">Get Started</button></Link>
      </div>
    </div>
  );
}

export default LandingPage;
