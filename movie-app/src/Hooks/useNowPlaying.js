import { useState, useEffect } from "react";
import axios from "axios";

function useNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const API_Key = "8f801ff902ecc53548ff30dc7dacbe10";

  useEffect(() => {
    const getNowPlaying = async () => {
      let nowPlayingList = [];
      let resNowPlaying = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
      );
     for(let i = 0; i < 5 ; i++) {
        nowPlayingList.push(resNowPlaying.data.results[i]);
      }
      setNowPlaying(nowPlayingList);
    };
     getNowPlaying()
  }, []);
  return nowPlaying;
}

export default useNowPlaying;
