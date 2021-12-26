import { useEffect, useState } from "react"
import searchLocationApi from "../api/searchLocation"

const useLocationWeather = (keyword,API_key) => {
 
    const [weatherData,setWeatherData] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{

     try {   const fetchData = async () => {
          setIsLoading(true)
            const data = await searchLocationApi.getTodayWithName(keyword,API_key)
            setWeatherData(data.data)
            setIsLoading(false)
        }
        fetchData()}
        catch (error)  {console.log(error.message)}

    },[API_key,keyword])

    return {weatherData,isLoading}
}

export default useLocationWeather