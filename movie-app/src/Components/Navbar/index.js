import React, { useState } from "react";
import "./_Navbar.scss";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { useDebounce } from "use-debounce/lib";
// import axios from "axios";

function Navbar({type}) {
  // const API_Key = process.env.REACT_APP_MOVIE_API_KEY;
  const [option, setOption] = useState(type);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  // const searchItem = useDebounce(search, 300); // Debounce lấy được keyword cần search

  const handleClickOption = (e) => {
    setOption(e.key);
  };

  const handleSearhIcon = () => {
    if (isShowSearchBar) {
      setIsShowSearchBar(false);
    } else {
      setIsShowSearchBar(true);
    }
  };

  const handleSearchTyping = (e) => {
    setSearch(e.target.value);
  };


  const menu = (
    <Menu
      theme="dark"
      style={{
        backgroundColor: "black",
        marginTop: "1rem",
        textAlign: "center",
      }}
      selectedKeys={option}
    >
      <Menu.Item className="menu-option" key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item className="menu-option" key="popular">
        <Link to="/Popular">Popular</Link>
      </Menu.Item>
      <Menu.Item className="menu-option" key="now">
        <Link to="NowPlaying">Now Playing</Link>
      </Menu.Item>
      <Menu.Item className="menu-option" key="upcoming">
        <Link to="Upcoming">Up Coming</Link>
      </Menu.Item>
      <Menu.Item className="menu-option" key="top">
        <Link to="TopRated">TopRated</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="title">
      <div className="navbar-container">
        <div className="navbar-container-fluid">
          <Link to="/">
            <div className="logo-container">
              <img
                className="logo-image"
                src={process.env.PUBLIC_URL + "/logo512.png"}
                alt=""
              />
              <h2>Movie React</h2>
            </div>
          </Link>
          <div className="navbar">
            <Menu
              className="menu"
              onClick={(e) => handleClickOption(e)}
              selectedKeys={option}
              mode="horizontal"
              theme="dark"
            >
              <Menu.Item className="menu-option" key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item className="menu-option" key="popular">
                <Link to="/Popular">Popular</Link>
              </Menu.Item>
              <Menu.Item className="menu-option" key="now">
                <Link to="NowPlaying">Now Playing</Link>
              </Menu.Item>
              <Menu.Item className="menu-option" key="upcoming">
                <Link to="Upcoming">Up Coming</Link>
              </Menu.Item>
              <Menu.Item className="menu-option" key="top">
                <Link to="TopRated">TopRated</Link>
              </Menu.Item>
              <Menu.Item
                onClick={handleSearhIcon}
                icon={<SearchOutlined />}
                className="menu-option search-button"
                key="search"
              ></Menu.Item>
            </Menu>

            <div className="navbar-mobile">
              <Menu className="search-mobile">
                <Menu.Item
                  style={{ backgroundColor: "black" }}
                  onClick={handleSearhIcon}
                  icon={<SearchOutlined />}
                  className="menu-option search-button"
                  key="search"
                ></Menu.Item>
              </Menu>
              <Dropdown className="nav" overlay={menu} trigger={["click"]}>
                <a
                  href="##"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <MenuOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      {isShowSearchBar ? (
        <Input
          className="search-input"
          size="large"
          placeholder="Search For Film"
          value={search}
          onChange={(e) => handleSearchTyping(e)}
          prefix={<SearchOutlined />}
        />
      ) : null}
    </div>
  );
}

export default Navbar;
