import React, { Fragment } from "react";
import "./_FilmInfoBottomPage.scss";

function FilmInfoBottomPage({ filmCreditsData }) {
  const renderStarringList = () => {
    return filmCreditsData[1].map((item, idx) => {
        const noImage = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
        let image= ""
        if(!item.profile_path) {image = noImage} else {image=`http://image.tmdb.org/t/p/original/${item.profile_path}`}
      return (
        <div className="starring" key={idx}>
          <div className="cast-image-container">
            <img
              className="cast-image"
              src={image}
              alt=""
            />
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
    <Fragment>
      <h1 className="cast-title">   Series cast</h1>
      <div className="bottom-info-container">
        <div className="starring-container">{renderStarringList()}</div>
        <div className="film-extra-info"></div>
      </div>
    </Fragment>
  );
}

export default FilmInfoBottomPage;
