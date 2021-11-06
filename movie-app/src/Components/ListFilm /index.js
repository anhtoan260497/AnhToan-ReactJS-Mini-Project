import React from "react";
import { Link } from "react-router-dom";
import "./_ListFilm.scss";

function ListFilm({ listFilm }) {
  const renderListFilm = () => {
    return listFilm.map((item, idx) => {
      return (
        <Link to={`/movie/${item.id}`}  key={idx}>
        <div
          className="list-film-item"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original${item.poster_path})`,
          }}
        >
          <div className="list-film-item-name">{item.title}</div>
        </div>
        </Link>
      );
    });
  };

  return <div className="list-film-container">{renderListFilm()}</div>;
}

export default ListFilm;
