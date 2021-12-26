import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../Search';
import './style.scss'

function SearchNotFound(props) {

    const isDay = useSelector((state)=> state.isDay.isDay)

    return (
        <div>
             <Search 
            location = ""
            country=''
            isLoading={false}
             />
             <div className={clsx('search-not-found',{
                 'dark-text' : !isDay ? true : false
             })}>
                 Please Enter Location in search bar and Press Enter
             </div>
        </div>
    );
}

export default SearchNotFound;