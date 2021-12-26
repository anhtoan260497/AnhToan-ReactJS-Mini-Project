import { useEffect, useState } from "react"
import currentLocationApi from "../api/currentLocation"

const usePrediction = (location,API_key) => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
    if(location.length < 1) return
        const  [lat,lon] = location
        setIsLoading(true)
        const fetchData = async () => {
            let newData = []
            const data = await currentLocationApi.getPredictionwithGeo(lat,lon,API_key)
            for(let i = 1 ; i < 5 ; i++) {
                newData.push(data.data.daily[i])
            }
            setData(newData)
            setIsLoading(false)
        }
        fetchData()

    },[API_key,location])

   
    
    return {data,isLoading}
} 

export default usePrediction