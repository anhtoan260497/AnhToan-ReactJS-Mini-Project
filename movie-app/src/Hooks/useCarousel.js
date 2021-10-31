import { useState, useEffect } from "react";
import axios from "axios";

function useNowPlaying(API_Key) {

  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const getNowPlaying = async () => {
      let nowPlayingList = [];
      let resNowPlaying = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=vi&page=1`
      );
     for(let i = 0; i < 5 ; i++) {
        nowPlayingList.push(resNowPlaying.data.results[i]);
      }
      setNowPlaying(nowPlayingList);
    };
     getNowPlaying()
  }, [API_Key]);
  return nowPlaying;
}

export default useNowPlaying;
