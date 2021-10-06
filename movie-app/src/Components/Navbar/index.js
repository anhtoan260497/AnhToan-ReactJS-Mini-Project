import React, { useState } from "react";
import "./_Navbar.scss";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { PicRightOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

function Navbar(props) {
  const [option, setOption] = useState("home");

  const handleClickOption = (e) => {
    setOption(e.key);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-container-fluid">
        <div className="logo-container">
          <img
            className="logo-image"
            src={process.env.PUBLIC_URL + "/logo512.png"}
            alt=""
          />
          <h2>Movie React</h2>
        </div>
        <div className="navbar">
          <Menu
            className="menu"
            onClick={(e) => handleClickOption(e)}
            selectedKeys={option}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item className="menu-option" key="home">
              Home
            </Menu.Item>
            <Menu.Item className="menu-option" key="popular">
              Popular
            </Menu.Item>
            <Menu.Item className="menu-option" key="now">
              Now Playing
            </Menu.Item>
            <Menu.Item className="menu-option" key="upcoming">
              Upcoming
            </Menu.Item>
            <Menu.Item className="menu-option" key="top">
              Top Rated
            </Menu.Item>
          </Menu>

          <Menu
            onClick={(e) => handleClickOption(e)}
            theme="dark"
            className="nav"
            mode="horizontal"
            selectedKeys={option}
          >
            <SubMenu key="SubMenu" icon={<PicRightOutlined />}>
            <Menu.Item className="nav-option" key="home">
              Home
            </Menu.Item>
            <Menu.Item className="nav-option" key="popular">
              Popular
            </Menu.Item>
            <Menu.Item className="nav-option" key="now">
              Now Playing
            </Menu.Item>
            <Menu.Item className="nav-option" key="upcoming">
              Upcoming
            </Menu.Item>
            <Menu.Item className="nav-option" key="top">
              Top Rated
            </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
