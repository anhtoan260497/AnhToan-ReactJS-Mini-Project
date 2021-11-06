import React, { useEffect, useState } from "react";
import "./_ListFilmPage.scss";
import NavBar from "../../Components/Navbar";
import Filter from "../../Components/Filter";
import ListFilm from "../../Components/ListFilm ";
import useGetMovies from '../../Hooks/useGetHomeMovies'

function ListFilmPage(props) {
  let type = props.match.params.genres;
  const API_Key = process.env.REACT_APP_MOVIE_API_KEY 
  const [genres, setGenres] = useState()
  const listFilm = useGetMovies(genres,API_Key)
  console.log(type)
  console.log(genres)
  
  
  // bấm vào type nào ở Home hoặc NavBar thì option đó ở NavBar sẽ sáng
  useEffect(()=>{

    switch (type) {
    case "Popular":
      setGenres("popular");
      break;
    case "NowPlaying":
      setGenres("nowPlaying");
      break;
    case "Upcoming":
      setGenres("upcoming");
      break;
    case "TopRated":
      setGenres("topRated");
      break;
    default:
      return ;
  }
  },[type])
  


  return (
    <div>
      <NavBar type={genres} />
      <div className="list-film-page-container">
         <Filter />
         <ListFilm listFilm={listFilm}/>
      </div>
    </div>
  );
}

export default ListFilmPage;
