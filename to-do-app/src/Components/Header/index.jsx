import React from "react";
import "./style.scss";



function Header({handleClickIcon, icon }) {
  return (
    <div className="header">
      <div className="header-logo">TODO APP</div>
      <div
        onClick={handleClickIcon}
        style={{
          backgroundImage: `url(${icon})`,
        }}
        className="dark-and-light"
      ></div>
    </div>
  );
}

export default Header;
