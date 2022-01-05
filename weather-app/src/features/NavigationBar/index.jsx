import {
  AppstoreOutlined,
  FileSearchOutlined,
  SearchOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { changeDay } from "./DayControlSlice/dayControlSlice";
import "./style.scss";

function NavigationBar() {
  const isDay = useSelector((state) => state.isDay.isDay);
  const firstChoose = useLocation().pathname;
  const [chooseMenu, setChooseMenu] = useState(firstChoose);

  const pathname = useLocation();

  const dispatch = useDispatch();

  const handleDarkModeBtn = () => {
    dispatch(changeDay());
  };

  const onHandleChangeMenu = (values) => {
    if (values === "Dashboard" || values === "/") {
      setChooseMenu("/Dashboard");
    }
    if (values === "About Me") {
      setChooseMenu("/About");
    }
    if (values === "Search") {
      setChooseMenu("/Search");
    }
  };

  const dt = new Date();
  const [date, day, month, year] = [
    dt.getDay(),
    dt.getDate(),
    dt.getMonth(),
    dt.getFullYear(),
  ];
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    if (pathname.pathname === "/") setChooseMenu("/Dashboard");
    if (pathname.pathname === "/About") setChooseMenu("/About");
    if (pathname.pathname === "/Search") setChooseMenu("/Search");
    if (pathname.state?.search === true) setChooseMenu("/Search");
  }, [pathname]);

  return (
    <div
      className={clsx("nav_container--list", "nav_background--transition", {
        "dark-nav": !isDay ? true : false,
      })}
    >
      <div className="nav_logo--container">
        <img src={process.env.PUBLIC_URL + "/logo-day.svg"} alt="" />

        <h1>React Forecast</h1>
      </div>
      <div className="nav_menu--items">
        <Link
          to="/Dashboard"
          className={clsx("nav_menu-item", {
            active: chooseMenu === "/Dashboard" ? true : false,
          })}
          onClick={(e) => onHandleChangeMenu(e.target.innerText)}
        >
          <AppstoreOutlined style={{ marginRight: "1rem" }} />
          Dashboard
        </Link>
        <Link
          to="/Search"
          className={clsx("nav_menu-item", {
            active: chooseMenu === "/Search" ? true : false,
          })}
          onClick={(e) => onHandleChangeMenu(e.target.innerText)}
        >
          <SearchOutlined style={{ marginRight: "1rem" }} />
          Search
        </Link>
        <Link
          to="/About"
          className={clsx("nav_menu-item", {
            active: chooseMenu === "/About" ? true : false,
          })}
          onClick={(e) => onHandleChangeMenu(e.target.innerText)}
        >
          <GithubOutlined style={{ marginRight: "1rem" }} />
          About Me
        </Link>
      </div>
      <div
        className={clsx("day-info", {
          "dark-text": !isDay ? true : false,
        })}
      >
        {dayOfWeek[date]}{" "}
        {day % 10 === 1 ? (
          <span>
            {day}
            <span className="ordinal">st</span>
          </span>
        ) : (day % 10 === 10) === 2 ? (
          <span>
            {day}
            <span className="ordinal">nd</span>
          </span>
        ) : day % 10 === 3 ? (
          <span>
            {day}
            <span className="ordinal">rd</span>
          </span>
        ) : (
          <span>
            {day}
            <span className="ordinal">th</span>
          </span>
        )}
        , {monthOfYear[month]} {year}
      </div>
      <div onClick={handleDarkModeBtn} className="nav_btn--nightmode">
        <button className="btn">
          <img
            style={{ backGroundColor: "transparent" }}
            title="dark-mode"
            src={
              isDay
                ? process.env.PUBLIC_URL + "/svg/sun.svg"
                : process.env.PUBLIC_URL + "/svg/moon.svg"
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
