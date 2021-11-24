import React, { useEffect, useState } from 'react';
import weatherApi from '../../api/weatherApi';
import Navbar from '../../components/Navbar';
import WeatherInfo from '../../components/WeatherInfo';
import useClock from '../../hooks/useClock';
import useImagePath from '../../hooks/useImagePath';

function Homepage() {
  const API_key = process.env.REACT_APP_API_KEY;
  const { isDay } = useClock(); // state  for clock
  //state for Current Location
  const [isLoadingCurrent, setIsLoadingCurrent] = useState(true); // state for API loading
  const [isLoading7Days, setIsLoading7Days] = useState(true);

  const [Location, setLocation] = useState(); // state for  location lat and lon

  const [dataCurrent, setDataCurrent] = useState(); // state for data current
  const [data7Days, setData7Days] = useState([]); // state for data 7 days

  const imagePath = useImagePath(dataCurrent, isDay); // state for weather condition path at current weather day
  const imagePath7Days = useImagePath(data7Days, isDay); // get weather condition path at public animated

  const [search, setSearch] = useState('');
  const [searchSumit, setSearchSubmit] = useState('');
  const [isSearchVisible, setIsSeatchVisible] = useState(false);

  const [dataSearch, setDataSearch] = useState();
  const [isLoadingSearch, setIsLoadingSearch] = useState(true);

  const imagePathSearch = useImagePath(dataSearch, isDay); // state for weather condition path at current weather day
  const imagePath7DaysSearch = useImagePath(data7Days, isDay); // get weather condition path at public animated

  const [dataSearch7Days, setDataSearch7Days] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []); // get current location [lat,lon]

  useEffect(() => {
    if (!Location || isSearchVisible) return; // nếu có isSearchVisible === true thì return, không chạy hàm
    const getCurrentLocationData = async () => {
      const data = await weatherApi.getCurrentLocation(Location[0], Location[1], API_key);
      setDataCurrent([data]);
      setIsLoadingCurrent(false);
    };
    getCurrentLocationData();
  }, [Location, API_key, isSearchVisible]); // getData current location

  useEffect(() => {
    if (!Location || isSearchVisible) return; // nếu có isSearchVisible === true thì return, không chạy hàm
    const get7DaysData = async () => {
      const data = await weatherApi.getLocation7DaysData(Location[0], Location[1], API_key);
      setData7Days(data.daily);
      setIsLoading7Days(false);
    };
    get7DaysData();
  }, [Location, API_key, isSearchVisible]); // getData7Days for current location

  //Data for searchVisible
  useEffect(() => {
    if (!isSearchVisible) return;
    const getSearchLocationData = async () => {
      try {
        const data = await weatherApi.getSearchLocation(searchSumit, API_key);
        setDataSearch([data]);
        setIsLoadingSearch(false);
        setLocation([data.coord.lat,data.coord.lon])
        console.log(data);
      } catch (err) {
        alert('City or State not found, please try again');
        setIsSeatchVisible(false); //lỗi thì đẩy ra alert và set lại State trả về UI của Current Location
      }
    };
    getSearchLocationData();
  }, [isSearchVisible, API_key, searchSumit]);

  useEffect(() => {
    if(!isSearchVisible ) return 
    const get7DaysData = async () => {
      const data = await weatherApi.getLocation7DaysData(Location[0], Location[1], API_key);
      setData7Days(data.daily);
      setIsLoading7Days(false);
    };
    get7DaysData();
  }, [API_key,Location,isSearchVisible]); // lấy Data 7 day khi submit search

  const onHandleInput = (e) => {
    setSearch(e.target.value);
  }; // set Input

  const onSubmitInputSearch = (e) => {
    e.preventDefault();
    setIsSeatchVisible(true);
    setSearchSubmit(e.target[0].value);
    setSearch('');
  }; // Submit sau khi Enter

  const backToCurrentWeather = () => {
    setIsSeatchVisible(false);
  }; // trở lại trạng thái current Location

  return (
    <div>
      <Navbar
        onHandleInput={onHandleInput}
        onSubmitInputSearch={onSubmitInputSearch}
        search={search}
        backToCurrentWeather={backToCurrentWeather}
      />
      {!isSearchVisible ? (
        <WeatherInfo
          isDay={isDay}
          isLoadingCurrent={isLoadingCurrent}
          imagePath={imagePath}
          imagePath7Days={imagePath7Days}
          dataCurrent={dataCurrent}
          data7Days={data7Days}
          isLoading7Days={isLoading7Days}
        /> // khi không search sẽ có component này
      ) : (
        <WeatherInfo
          isDay={isDay}
          isLoadingCurrent={isLoadingSearch}
          imagePath={imagePathSearch}
          imagePath7Days={imagePath7Days}
          dataCurrent={dataSearch} //
          data7Days={data7Days}
          isLoading7Days={isLoading7Days}
        />  // khi search sẽ có component này
      )}
    </div>
  );
}

export default Homepage;
