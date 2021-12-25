import { useEffect, useState } from "react"
import currentLocationApi from "../api/currentLocation"

const usePrediction = (location,API_key) => {
    const [data,setData] = useState([])

    useEffect(()=>{
    if(!location) return
        const  [lat,lon] = location
        const fetchData = async () => {
            let newData = []
            const data = await currentLocationApi.getPredictionwithGeo(lat,lon,API_key)
            for(let i = 0 ; i < 4 ; i++) {
                newData.push(data.data.daily[i])
            }
            setData(newData)
        }
        fetchData()
    },[API_key,location])

   
    
    return data
} 

export default usePrediction