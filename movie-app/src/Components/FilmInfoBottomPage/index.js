import React, { Fragment, useEffect, useRef, useState } from "react";
import "./_FilmInfoBottomPage.scss";
import {
  ClockCircleOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

function FilmInfoBottomPage({ filmCreditsData, filmInfoData }) {

  
  const renderStarringList = () => {
    return filmCreditsData[1].map((item, idx) => {
      const noImage = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`;
      let image = "";
      if (!item.profile_path) {
        image = noImage;
      } else {
        image = `http://image.tmdb.org/t/p/original/${item.profile_path}`;
      }
      return (
        <div className="starring" key={idx}>
          <div className="cast-image-container">
            <img className="cast-image" src={image} alt="" />
          </div>
          <div className="cast-name-container">
            <h3 className="cast-name">{item.name}</h3>
            <h4 className="cast-character">{item.character}</h4>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>  {/* filmInfoData[1] === isLoading, nếu isLoading === false thì dữ liệu đã chạy xong, render giao diện */}
      {!filmInfoData[1] ? (
        <Fragment>
          {" "}
          <h1 className="cast-title"> Series cast</h1>
          <div className="bottom-info-container">
            <div className="starring-container">
              {renderStarringList()}
            </div>
            <div style={{ color: "white" }} className="film-extra-info">
              <div className="film-original-name">
                <span>
                  <FileTextOutlined /> Original Title
                </span>
                <span>{filmInfoData[0].original_title}</span>
              </div>
              <hr />
              <div className="film-time">
                <span>
                  <ClockCircleOutlined /> Duration
                </span>
                <span>
                  {parseInt(filmInfoData[0].runtime / 60)}h{" "}
                  {parseInt(filmInfoData[0].runtime % 60)}
                </span>
              </div>
              <hr />
              <div className="film-vote">
                {filmInfoData[0].vote_average > 6.5 ? (
                  <span>
                    <CheckCircleOutlined style={{ color: "rgb(26,135,84)" }} />{" "}
                    Vote
                  </span>
                ) : (
                  <span>
                    <CloseCircleOutlined style={{ color: "rgb(220,53,69)" }} />{" "}
                    Vote
                  </span>
                )}
                <span>{filmInfoData[0].vote_average}</span>
              </div>
            </div>
          </div>{" "}
        </Fragment>
      ) : null}
    </Fragment>
  );
}

export default FilmInfoBottomPage;
