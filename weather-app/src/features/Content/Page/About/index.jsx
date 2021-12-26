import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { useSelector } from "react-redux";
import './style.scss'


function About() {
  const isDay = useSelector((state) => state.isDay.isDay);

  return (
    <div
      style={{
        width: "100%",
        height: " 100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={clsx({
        "dark-color": !isDay ? true : false,
      })}
    >
      <a
        href="https://github.com/anhtoan260497/AnhToan-ReactJS-Mini-Project/tree/weather-app/weather-app"
        target="_blank"
        rel="noreferrer"
        style={{textDecoration:'none'}}
      >
        <GithubOutlined
          style={{ fontSize: "5rem",textDecoration:'none'}}
        /> <span>Click here to review source code</span>
      </a>
    </div>
  );
}

export default About;
