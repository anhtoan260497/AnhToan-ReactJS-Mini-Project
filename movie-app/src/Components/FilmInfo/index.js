import React from 'react';
import useFilmInfo from '../../Hooks/useFilmInfo';
import FilmInfoTopPage from '../FilmInfoTopPage';
import './_FilmInfo.scss'

function FilmInfo(props) {
    const id = props.match.params.id
    const API_Key = process.env.REACT_APP_MOVIE_API_KEY
    const filmInfoData = useFilmInfo(id,API_Key)
    console.log(filmInfoData)
    
    
    return (
        <div>
            <FilmInfoTopPage filmInfoData={filmInfoData}/>
        </div>
    );
}

export default FilmInfo;