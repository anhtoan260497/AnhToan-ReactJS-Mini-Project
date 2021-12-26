import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useImagePath from "../../hooks/useImagePath";
import "./style.scss";

WeatherCondition.propTypes = {};

function WeatherCondition({dataWeather, IQAData, isLoading }) {
  const [id, setId] = useState();
  const imagePath = useImagePath(id);

  const isDay = useSelector((state) => state.isDay).isDay;



  useEffect(() => {
    if (isLoading ===  false) {
      setId(dataWeather?.weather[0].id);
    }
  }, [isLoading,dataWeather]);

  return (
    <>
      {!isLoading ? (
        <div
          className={clsx("condition_container--area", {
            "dark-weather-condition": !isDay ? true : false,
          })}
        >
          <div
            className="condition_display--area"
            style={{ backgroundImage: `url(/image/${imagePath})` }}
          >
            <section
              style={{
                width: "100%",
                display: "flex",
                height: "7rem",
              }}
            >
              <div className="condition_weather--image">
                <div className="condition-image">
                  <img
                    style={{ width: "100%" }}
                    src={`http://openweathermap.org/img/wn/${dataWeather?.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
              </div>
              <div className="condition_weather--description">
                <h2>Weather</h2>
                <div>{dataWeather?.weather[0].description}</div>
              </div>
            </section>
            <section
              style={{
                width: "100%",
                display: "flex",
                height: "6rem",
                paddingLeft: "2rem",
                alignItems: "center",
                color: "black",
              }}
              className="condition_degree-display"
            >
              <h3 style={{ fontSize: "4rem" }}>
                {Math.trunc(dataWeather?.main.temp - 273.15)}°C
              </h3>
              <div className="current-deg" style={{ marginLeft: "2rem" }}>
                <span>
                  {Math.trunc(dataWeather?.main.feels_like - 273.15)}°C
                </span>
              </div>
            </section>
            <section className="condition_info--area">
              <div className="condition_info--box pressure">
                <p>Pressure</p>
                <h2>{dataWeather?.main.pressure}</h2>
              </div>
              <div className="condition_info--box visibility">
                <p>Visibility</p>
                <h2>{dataWeather?.visibility / 1000}km</h2>
              </div>
              <div className="condition_info--box humidity">
                <p>Humidity</p>
                <h2>{dataWeather?.main.humidity}</h2>
              </div>
            </section>
          </div>
          {!IQAData?.isLoading ? (
            <div
              className="condition_iqa--area"
              style={{ backgroundColor: `${IQAData?.color}` }}
            >
              <div className="iqa-icon">
                <img src={IQAData?.imgPath} alt="" />
              </div>
              <div className="iqa-score">
                <h2 style={{ lineHeight: "8 rem" }}>{IQAData?.score ? IQAData?.score : 'No Score'}</h2>
              </div>
              <div className="iqa-status">{IQAData?.name}</div>
            </div>
          ) : (
            <div className="condition_iqa--area" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img
                style={{width:'5rem',height:'5rem'}}
                src={process.env.PUBLIC_URL + "loading.gif"}
                alt=""
              />
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default WeatherCondition;