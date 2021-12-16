import {
  AppstoreOutlined,
  FileSearchOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeDay } from "./DayControlSlice/dayControlSlice";
import { changeActive } from "./NavMenuSlice/navMenuSlice";
import "./style.scss";

function NavigationBar() {
  const isDay = useSelector((state) => state.isDay.isDay);
  const chooseMenu = useSelector((state) => state.chooseMenu.choose);
  const dispatch = useDispatch();

  const handleDarkModeBtn = () => {
    dispatch(changeDay());
  };

  const onHandleChangeMenu = (values) => {
    dispatch(changeActive(values));
  };

  return (
      <div
        className={clsx("nav_container--list", "transition", {
          dark: !isDay ? true : false,
        })}
      >
        <div className="nav_logo--container">
          <img src={process.env.PUBLIC_URL + "/logo-day.svg"} alt="" />

          <h1>React Weather</h1>
        </div>
        <div className="nav_menu--items">
          <Link
            to="/Dashboard"
            className={clsx("nav_menu-item", {
              active: chooseMenu === "Dashboard" ? true : false,
            })}
            onClick={(e) => onHandleChangeMenu(e.target.innerText)}
          >
            <AppstoreOutlined style={{ marginRight: "1rem" }} />
            Dashboard
          </Link>
          <Link
            to="/Favorite"
            className={clsx("nav_menu-item", {
              active: chooseMenu === "Favorite" ? true : false,
            })}
            onClick={(e) => onHandleChangeMenu(e.target.innerText)}
          >
            <FileSearchOutlined style={{ marginRight: "1rem" }} />
            Favorite
          </Link>
          <Link
            to="/About"
            className={clsx("nav_menu-item", {
              active: chooseMenu === "About Me" ? true : false,
            })}
            onClick={(e) => onHandleChangeMenu(e.target.innerText)}
          >
            <GithubOutlined style={{ marginRight: "1rem" }} />
            About Me
          </Link>
        </div>
        <div onClick={handleDarkModeBtn} className="nav_btn--nightmode">
          <button className="btn">
            <img
              style={{ backGroundColor: "transparent" }}
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