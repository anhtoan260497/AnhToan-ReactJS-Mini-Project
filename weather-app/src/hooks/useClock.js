import { useEffect, useState } from "react";
function useClock() {
  const [date,setDate] = useState()
  const [day,setDay] = useState()
  const [month,setMonth] =useState()
  const [year,setYear] = useState()
  const [time,setTime] = useState()

  const [isDay, setIsDay] = useState(true) // kiểm tra ban ngày hay ban đêm
  const [isLoadingTime, setIsLoadingTime] = useState(true)

  useEffect(() => {
    const onGetDateTime = setInterval(() => {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']
      const date = new Date();
      const weekday = daysOfWeek[(date.getDay())]
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const time = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
      if(date.getHours() - 12 <= -6 || date.getHours() - 12 >= 6 ){setIsDay(false)} else {setIsDay(true)}
     setDate(weekday)
     setDay(day)
     setMonth(month)
     setYear(year)
     setTime(time)
     setIsLoadingTime(false)
    }, 1000);
    return () => {
      clearInterval(onGetDateTime);
    };
  }, []);

  return { date,day,month,year,time,isDay, isLoadingTime }

}
export default useClock;
