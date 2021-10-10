import axios from "axios";
import { useEffect, useState } from "react";

function useGetMovies(type, API_Key) {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`;
      const getNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`;
      const getUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`;
      const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`;
      let resData;
      switch (type) {
        case "popular":
          resData = await axios.get(getPopular);
          break;
        case "nowPlaying":
          resData = await axios.get(getNowPlaying);
          break;
        case "upcoming":
          resData = await axios.get(getUpcoming);
          break;
        case "topRated":
          resData = await axios.get(topRated);
          break;
        default:
          return null;
      }
      setData(resData.data.results);
    };
    getData();
  }, [API_Key, type]);
  return data;
}

export default useGetMovies;
