import { useEffect, useState } from "react";
import currentLocationApi from "../api/IQAData";
import IQAirSVg from "../svg/IQAirSvg";

const useIQA = (location, API_Key) => {
  const [score, setScore] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [SVG, setSVG] = useState("");

  useEffect(() => {
    if (!location) return;
    let [lat, lon] = location;

 const fetchIQAData = async () => {
    setIsLoading(true);
      const data = await currentLocationApi.getTodayWithGeo(lat, lon, API_Key);
      setIsLoading(false);
      setScore(data.data.data.current.pollution.aqius)
     
    };

    fetchIQAData();
  }, [location, API_Key]);


  useEffect(() => {
    if (score < 51) setSVG(IQAirSVg.good)
    if (score >= 51 && score < 101) setSVG(IQAirSVg.moderate);
    if (score >= 101 && score < 151) setSVG(IQAirSVg.unhealthySentitiveGroup);
    if (score >= 151 && score < 201) setSVG(IQAirSVg.unhealthy);
    if (score >= 201 && score < 301) setSVG(IQAirSVg.veryUnhealthy);
    if (score > 300) setSVG(IQAirSVg.hazardous);
  }, [score]);

  return {...SVG,score,isLoading}
};

export default useIQA;
