import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useImagePath = (id) => {
  const [imagePath, setImagePath] = useState();
  const isDay = useSelector((state) => state.isDay.isDay);

  console.log(id);

  useEffect(() => {
    if (id <= 232 && isDay) {
      setImagePath("thunderstorms-day.jpg");
    }
    if (id <= 232 && !isDay) {
      setImagePath("thunderstorm-night.jpg");
    }
    if (id >= 300 && id <= 321 && isDay) {
      setImagePath("drizzle-day.jpg");
    }
    if (id >= 300 && id <= 321 && !isDay) {
      setImagePath("drizzle-night.jpg");
    }
    if ((id >= 500) & (id <= 531) && isDay) {
      setImagePath("rain-day.jpg");
    }
    if ((id >= 500) & (id <= 531) && !isDay) {
      setImagePath("rain-night.jpg");
    }
    if ((id >= 600) & (id <= 622) && isDay) {
      setImagePath("snow-day.jpg");
    }
    if ((id >= 600) & (id <= 622) && !isDay) {
      setImagePath("snow-night.jpg");
    }
    if ((id >= 701) & (id <= 781) && isDay) {
      setImagePath("mist-day.jpg");
    }
    if ((id >= 701) & (id <= 781) && !isDay) {
      setImagePath("mist-night.jpg");
    }
    if (id === 800 && isDay) {
      setImagePath("clear-sky-day.jpg");
    }
    if (id === 800 && !isDay) {
      setImagePath("clear-sky-night.jpg");
    }
    if (id >= 801 && id <= 804 && isDay) {
      setImagePath("few-clouds-day.jpg");
    }
    if (id >= 801 && id <= 804 && !isDay) {
      setImagePath("few-clouds-night.jpg");
    }
  }, [id, isDay]);

  return imagePath;
};

export default useImagePath;
