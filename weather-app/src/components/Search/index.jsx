import {React} from 'react';
import './style.scss'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import clsx from 'clsx';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



function Search({location,country,isLoading}) {

  const isDay = useSelector((state) => state.isDay.isDay);
  const [input,setInput] = useState('')

  const history = useHistory()

  const handleTypingInput = e => {
    setInput(e.target.value)
  }

  const onSubmit = (e,values) => {
    e.preventDefault()
    history.push({
      pathname : `/Search/${values}`,
      state : {
        search : true 
      }
    })
  }

    return (
        <div className={clsx("search_container--input",{
          'dark-search' : !isDay ? true : false
        })}>
          <div className='search__location--title'>{isLoading ? `Loading...`: `${location} ${country}`}</div>
          <form className='form' onSubmit={e => onSubmit(e,input)}>
            <input className='search_location--input' name='location' type='text' placeholder='Search anything' autoComplete='none' onChange={e => handleTypingInput(e)} value={input} />
            <button className='search_location--btn'><SearchOutlined style={{fontSize:'2rem',color:'orange'}} /></button>
          </form>
      </div>
    );
}

export default Search;