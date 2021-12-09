import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

PlayZone.propTypes = {
  gameStatus : PropTypes.array.isRequired,
  handleAddChess : PropTypes.func,
};

function PlayZone({gameStatus,handleAddChess}) {

  const renderUI = () => {
    return gameStatus.map((item,idx) => {
      return <div key={idx} className={clsx('box',`box-${idx+1}`, {
        x : item === 'x' ? true : false ,
        o : item === 'o' ? true :false
      })} onClick={()=>handleAddChess(idx)} ></div>
    })
  }

  return (
    <div className="playzone">
      {renderUI()}
    </div>
  );
}

export default PlayZone;
