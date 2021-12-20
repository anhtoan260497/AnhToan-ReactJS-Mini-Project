import {React} from 'react';
import './style.scss'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import clsx from 'clsx';



function Search({location,country,isLoading}) {

  const isDay = useSelector((state) => state.isDay.isDay);
  


    return (
        <div className={clsx("search_container--input",{
          'dark-search' : !isDay ? true : false
        })}>
          <div className='search__location--title'>{isLoading ? `Loading...`: `${location}, ${country}`}</div>
          <form className='form'>
            <input className='search_location--input' name='location' type='text' placeholder='Search anything' autoComplete='none' />
            <button className='search_location--btn'><SearchOutlined style={{fontSize:'2rem',color:'orange'}} /></button>
          </form>
      </div>
    );
}

export default Search;