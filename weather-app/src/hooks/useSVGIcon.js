const useSVGIcon = (id, isDay) => {
  if ((id < 211 && isDay) || (id > 211 && id < 300 && isDay)) {
    return "/svg/thunderstorms-day-rain.svg";
  }
  if ((id < 211 && !isDay) || (id > 211 && id < 300 && !isDay)) {
    return "/svg/thunderstorms-night-rain.svg";
  }
  if (id === 211 && isDay) {
    return "/svg/thunderstorms-day.svg";
  }
  if (id === 211 && !isDay) {
    return "/svg/thunderstorms-night.svg";
  }

  if(id >=300 && id <= 321 && isDay) {
      return '/svg/partly-cloudy-day-drizzle.svg'
  }
  if(id >=300 && id <= 321 && !isDay) {
    return '/svg/partly-cloudy-night-drizzle.svg'
}
if(id >= 500 && id <= 531) {
    return '/svg/rain.svg'
}

if(id >= 600 && id <= 622 && isDay) {
    return '/svg/partly-cloudy-day-snow.svg'
}

if(id >= 600 && id <= 622 && !isDay) {
    return '/svg/partly-cloudy-night-snow.svg'
}

if(id >= 701 && id <= 781 ){
    return  '/svg/tornado.svg'
}

if( id === 800 && isDay) {
    return '/svg/clear-day.svg'
}

if(id === 800 && !isDay){
    return '/svg/clear-night.svg'
}

if( id > 800 && isDay) {
    return '/svg/overcast-day.svg'
}

if( id > 800 && !isDay) {
    return '/svg/overcast-night.svg'
}

};
export default useSVGIcon;
