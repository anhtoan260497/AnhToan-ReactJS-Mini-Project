import axios from "axios";
import { useEffect, useState } from "react";

function useGetMovies(type,API_Key) {
    const [data, setData] = useState([{
      "id": 580489,
      "original_title": "Venom: Let There Be Carnage",
      "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    }]);

    useEffect(() => {
        const getData = async () => {
          const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`
          let resData; 
          if(type === "popular"){resData =  await axios.get(
            getPopular
          );
        }
          setData(resData.data.results)
        };
        getData()
      },[API_Key,type]);
      return data
}

export default useGetMovies;