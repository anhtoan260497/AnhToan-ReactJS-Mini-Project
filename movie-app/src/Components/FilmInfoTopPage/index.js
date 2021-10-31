import { Button, Tooltip } from "antd";
import React, { Fragment } from "react";
import "./_FilmInfoTopPage.scss";
import "antd/dist/antd.css";
import {
  CaretLeftOutlined,
  PlayCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar";
import { useHistory } from "react-router";
import { Progress } from "antd";

function FilmInfoTopPage({ filmInfoData }) {
  const history = useHistory();
  const {
    backdrop_path,
    homepage,
    title,
    overview,
    poster_path = "a",
    vote_average,
    tagline,
    id,
  } = filmInfoData[0];

  const handleBackButton = () => {
    history.goBack();
  };
  const handlePlayTrailer = () => {
    history.push(`/${id}/Trailer`);
  };

  return (
    <Fragment>
      <Navbar pageType={null} />
      {!filmInfoData[1] ? (
        <div
          className="top-info-container"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        >
          <div className="top-info-background-transparent">
            <div className="top-info">
              <div className="poster">
                <Progress
                  strokeWidth="6"
                  trailColor={
                    vote_average * 10 < 50
                      ? "rgba(219,235,96,20%)"
                      : vote_average * 10 >= 50 && vote_average * 10 <= 80
                      ? "rgba(211,213,48,20%)"
                      : "rgba(33,208,132,20%)"
                  }
                  width={40} // error
                  strokeColor={
                    vote_average * 10 < 50
                      ? "rgb(219,235,96)"
                      : vote_average * 10 >= 50 && vote_average * 10 <= 80
                      ? "rgb(211,213,48)"
                      : "rgb(33,208,132)"
                  }
                  className="progress"
                  type="circle"
                  percent={vote_average * 10}
                />
                <img
                  src={`http://image.tmdb.org/t/p/original${poster_path}`}
                  alt=""
                />
              </div>
              <div className="info">
                <div className="title-info">
                  {title}{" "}
                  <Tooltip title="Play Trailer">
                    <Button
                      onClick={handlePlayTrailer}
                      className="back-button"
                      type="primary"
                      shape="circle"
                      icon={
                        <PlayCircleOutlined style={{ fontSize: "1.5rem" }} />
                      }
                    />
                  </Tooltip>
                </div>
                <div className="tagline"> {tagline}</div>
                <div className="homepage">
                  <LinkOutlined />{" "}
                  <a
                    href={homepage}
                    rel="noreferrer"
                    target="_blank"
                    title={homepage}
                  >
                    Film's HomePage
                  </a>
                </div>
                <div className="overview">{overview}</div>
              </div>
            </div>
            <div className="back-button-container">
              <Tooltip title="Back to home">
                <Button
                  onClick={handleBackButton}
                  className="back-button"
                  type="primary"
                  shape="circle"
                  icon={<CaretLeftOutlined style={{ fontSize: "1.5rem" }} />}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default FilmInfoTopPage;
