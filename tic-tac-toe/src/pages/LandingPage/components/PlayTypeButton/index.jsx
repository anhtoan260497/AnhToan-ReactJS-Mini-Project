import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

PlayTypeButton.propTypes = {
    description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleClickType : PropTypes.func,
};

function PlayTypeButton({ description, img }) {
  const handleClickType = "";

  console.log(typeof(description))
  return (
    <div className="button-container">
      <button className="draw" onClick={handleClickType}>
        <img src={process.env.PUBLIC_URL + `${img}`} alt="" />
        <span>{description}</span>
      </button>
    </div>
  );
}

export default PlayTypeButton;
