
import { useEffect, useState } from "react"
import currentLocationApi from "../api/currentLocation"

const useCurrentWeatherData = (location,API_Key) => {

    const [currentWeatherData,setCurrentWeatherData] = useState({})

    const [isLoading,setIsLoading] = useState(true)


    useEffect(()=>{
        if(!location) return 
        const [lat,lon] = location
        const fetchData = async () => {
            setIsLoading(true)
            const data = await currentLocationApi.getTodayWithGeo(lat,lon,API_Key)
            setCurrentWeatherData(data.data)
            setIsLoading(false)
        }
        fetchData()
    },[location,API_Key])

    return {currentWeatherData,isLoading}
}

export default useCurrentWeatherData