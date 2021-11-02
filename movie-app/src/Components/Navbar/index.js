import React, { useEffect, useState } from "react";
import "./_Navbar.scss";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useDebounce from "../../Hooks/useDebounce";
import axios from "axios";

function Navbar({ type }) {
  const API_Key = process.env.REACT_APP_MOVIE_API_KEY; //API Key
  const [option, setOption] = useState(type); // bật sáng thẻ navbar vừa click
  const [isShowSearchBar, setIsShowSearchBar] = useState(false); // hiển thị thanh search

  const [search, setSearch] = useState(""); //keyword search
  const debouncedSearch = useDebounce(search); // kiểm tra debounce
  const [isSearch, setIsSearch] = useState(false); // hiển thị thanh search item
  const [searchItemData, setSearchItemData] = useState([]); //set data cho search
  console.warn = () => {}; // tắt hết mọi console warn cho dòng 118

  const handleClickOption = (e) => {
    setOption(e.key); // bật sáng thẻ navbar chọn
  };

  const handleSearhIcon = () => {
    if (isShowSearchBar) {
      setSearch("")
      setIsShowSearchBar(false);
      setIsSearch(false)
    } else {
      setIsShowSearchBar(true);
    }
  }; // click icon search nếu đang bật chuyển tắt và đang tắt chuyển bật

  const handleClickSearchItem = () => {
    setSearch("")
    setIsSearch(false);
    setIsShowSearchBar(false); // khi click vào 1 search item ở dòng  47 thì tắt thanh search và tắt luôn search item
  };

  const handleSearchTyping = (e) => {
    setSearch(e.target.value); // nhập keyword vào search bar
  };

  const renderSearchItem = () => {
    return searchItemData.map((item, idx) => {
      return (
        <div key={idx} className="search-item">
          <Link to={`/movie/${item.id}`} onClick={handleClickSearchItem}>
            <div className="search-item-avatar">
              {" "}
              {item.backdrop_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt=""
                />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                  alt=""
                />
              )}
              <h1 className="search-item-title">{item.title}</h1>
              <span
                className="search-item-vote"
               style={ item.vote_average > 6.5 ? { color: "rgb(26,135,84)", margin: "0" } : { color: "rgb(220,53,69)" }}
              >
                {item.vote_average}
              </span>
            </div>
          </Link>
        </div>
      );
    });
  }; // render search item với data

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

  useEffect(() => {
    if (debouncedSearch && search !== "") {
      const getSearchItem = async () => {
        let resSearchItem = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${search}&page=1`
        );
        if (resSearchItem.data.results.length > 0) {
          setSearchItemData(resSearchItem.data.results);
          setIsSearch(true);
        } else {setIsSearch(false)} // nếu kết quả tìm kiếm trả về mảng rỗng thì không hiển thị search item, nếu mảng lớn hơn 0 thì bắt đầu hiển thị
      };
      getSearchItem();
    } else {
      setIsSearch(false);
    }
  }, [debouncedSearch, API_Key]); // useEffect handle cho debounce, nếu có debounce và search khác rỗng thì bắt đầu tìm API

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
      {isSearch ? (
        <div className="search-result">{renderSearchItem()}</div>
      ) : null}
    </div>
  );
}

export default Navbar;
