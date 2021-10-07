import { useState, useEffect } from "react";
import axios from "axios";

function useNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const API_Key = "8f801ff902ecc53548ff30dc7dacbe10";

  useEffect(() => {
    let nowPlayingList = [];
    const getNowPlaying = async () => {
      let resNowPlaying = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
      );
      let i = 0;
      while (i < 5) {
        nowPlayingList.push(resNowPlaying.data.results[i]);
        i++;
      }
    };
    getNowPlaying();
    setNowPlaying(nowPlayingList);
  }, []);
  return nowPlaying;
}

export default useNowPlaying;
