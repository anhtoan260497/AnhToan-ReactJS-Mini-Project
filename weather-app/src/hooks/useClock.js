import { useEffect, useState } from "react";
function useClock() {
  const [currentDate, setCurrentDate] = useState();
  const [isLoadingTime,setIsLoadingTime] = useState(true)
  const [isDay, setIsDay] = useState()

  useEffect(() => {
    const onGetDateTime = setInterval(() => {
      const date = new Date();
      const weekday = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      if(date.getHours() - 12 < 0){setIsDay(true)} else {setIsDay(false)}
      setCurrentDate(`${month}/${weekday}/${year} ${time} `);
      setIsLoadingTime(false)
    }, 1000);
    return () => {
      clearInterval(onGetDateTime);
    };
  }, []);

  return { currentDate,isLoadingTime,isDay };
}
export default useClock;
