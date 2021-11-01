import React from "react";
import "./_ListFilmPage.scss";
import NavBar from "../../Components/Navbar";

function ListFilmPage(props) {
  let genres;
  let type = props.match.params.genres;

  // bấm vào type nào ở Home hoặc NavBar thì option đó ở NavBar sẽ sáng
  switch (type) {
    case "Popular":
      genres = "popular";
      break;
    case "NowPlaying":
      genres = "now";
      break;
    case "Upcoming":
      genres = "upcoming";
      break;
    case "TopRated":
      genres = "top";
      break;
    default:
      return;
  }

  return (
    <div>
      <NavBar type={genres} />
      <div className="list-film-page-container">
          <div className=""></div>
          <div className="list-film-container"></div>
      </div>
    </div>
  );
}

export default ListFilmPage;
