import axiosClient from "./axiosClient";

const weatherApi = {
  getCurrentLocation(lat, lon, API_key) {
    const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    return axiosClient.get(url);
  },

  getLocation7DaysData(lat,lon,API_key){
    const url = `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_key}`
    return axiosClient.get(url)
  },

  getSearchLocation(city,API_Key){
    const url = `/data/2.5/weather?q=${city}&appid=${API_Key}`
    return axiosClient.get(url)
  }

};

export default weatherApi;
