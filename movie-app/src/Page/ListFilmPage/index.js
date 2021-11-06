import React, { useEffect, useState } from "react";
import "./_ListFilmPage.scss";
import NavBar from "../../Components/Navbar";
import Filter from "../../Components/Filter";
import ListFilm from "../../Components/ListFilm ";
import useGetMovies from "../../Hooks/useGetHomeMovies";

function ListFilmPage(props) {
  let type = props.match.params.genres;
  const API_Key = process.env.REACT_APP_MOVIE_API_KEY;
  const [genres, setGenres] = useState(); // lấy loại page
  const listFilmData = useGetMovies(genres, API_Key); // lấy Data

  const [sortType, setSortType] = useState(null);  //loại sort 
  const [listFilm,setListFilm] = useState(listFilmData) // list film render 

  const [filterKeyWords, setFilterKeyWord] = useState("") // lấy keyword để search

  const onChangeSortType = (sortType) => {
    setSortType(sortType);
  };

  const onChangefilterKeyWords = (keyword) =>{
    setFilterKeyWord(keyword.toLowerCase())
  }

  useEffect(() => {
    const sortListFilm = [...listFilmData]
    if(sortType === null) { setListFilm(listFilmData)} // nếu không có sort type thì render bình thường

    if (sortListFilm.length > 1 && sortType === "aToZ") {
      sortListFilm.sort((a, b) => {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) return -1;
        return 0;
      }); // sắp xếp A - Z 
      setListFilm(sortListFilm)
    } else if(sortListFilm.length > 1 && sortType === "zToA") {
      sortListFilm.sort((a, b) => {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA > titleB) return -1;
        return 0;
      }); //sắp xếp Z - A
      setListFilm(sortListFilm)
    } 
    else if(sortListFilm.length > 1 && sortType==="ratingAscending"){
      sortListFilm.sort((a, b) => {
        let voteA = a.vote_average;
        let voteB = b.vote_average;
        if (voteA < voteB) return -1;
        return 0;
      }); // sắp xếp theo vote average tăng
      setListFilm(sortListFilm)
    } else if(sortListFilm.length > 1 && sortType==="ratingDescending"){
      sortListFilm.sort((a, b) => {
        let voteA = a.vote_average;
        let voteB = b.vote_average;
        if (voteA > voteB) return -1;
        return 0;
      }); // sắp xếp theo vote average giảm
      setListFilm(sortListFilm)
    }
  }, [sortType,listFilmData]);

  useEffect(()=>{
   if(filterKeyWords !== "") {
    const listFilmSearch = listFilmData.filter(item => {
     return item.title.toLowerCase().includes(filterKeyWords)  // trả lại kết quả có keyword có trong title của item 
    })
    setListFilm(listFilmSearch)
   }  else {
    setListFilm(listFilmData)
   }
  },[filterKeyWords,listFilmData])

  // bấm vào type nào ở Home hoặc NavBar thì option đó ở NavBar sẽ sáng
  useEffect(() => {
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
        return;
    }
  }, [type]);

  return (
    <div>
      <NavBar type={genres} />
      <div className="list-film-page-container">
        <Filter onChangeSortType={onChangeSortType} onChangefilterKeyWords={onChangefilterKeyWords} />
        <ListFilm listFilm={listFilm} />
      </div>
    </div>
  );
}

export default ListFilmPage;
