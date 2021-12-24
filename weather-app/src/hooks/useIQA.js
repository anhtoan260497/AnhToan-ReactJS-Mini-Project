import { useEffect, useState } from "react";
import currentLocationApi from "../api/IqaCurrent";
import IQAirSVg from "../svg/IQAirSvg";

const useIQA = (location, API_Key) => {
  const [score,setScore] = useState()
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    if (!location) return;
    let [lat, lon] = location;

    const fetchIQAData = async () => {
      setIsLoading(true)
      const data = await currentLocationApi.getTodayWithGeo(lat, lon, API_Key);
      setScore(data.data.data.current.pollution.aqius)
      setIsLoading(false)
    };

    fetchIQAData();
  }, [location, API_Key]);
  if (score < 51 ) return IQAirSVg.good
  if( score >= 51 && score < 101) return {...IQAirSVg.moderate,score,isLoading}
  if (score >= 101 && score < 151 ) return {...IQAirSVg.unhealthySentitiveGroup,score,isLoading}
  if(score >= 151 && score < 201) return {...IQAirSVg.unhealthy,score,isLoading}
  if(score >=201  && score < 301) return {...IQAirSVg.veryUnhealthy,score,isLoading}
  if(score > 300 ) return {...IQAirSVg.hazardous,score,isLoading}
  
};

export default useIQA;
