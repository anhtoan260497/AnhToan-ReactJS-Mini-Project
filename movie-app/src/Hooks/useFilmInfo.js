import axios from "axios";
import { useEffect, useState } from "react";

function useFilmInfo(id,API_Key) {
    const [data,setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getData = async () =>{
            let resData = await axios.get(`
            https://api.themoviedb.org/3/movie/${id}?api_key=${API_Key}&language=en-US`)
            setData(resData.data)
            setIsLoading(false)
        }
        getData()
    },[API_Key,id])
    return [data,isLoading]
}



export default useFilmInfo;