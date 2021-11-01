import React from 'react';
import useFilmCredits from '../../Hooks/useFilmCredits';

import useFilmInfo from '../../Hooks/useFilmInfo';
import FilmInfoBottomPage from '../../Components/FilmInfoBottomPage';
import FilmInfoTopPage from '../../Components/FilmInfoTopPage';
import './_FilmInfo.scss'

function FilmInfo(props) {
    const id = props.match.params.id
    const API_Key = process.env.REACT_APP_MOVIE_API_KEY
    const filmInfoData = useFilmInfo(id,API_Key)
    const filmCreditsData = useFilmCredits(id,API_Key)
    return (
        <div>
            <FilmInfoTopPage filmInfoData={filmInfoData}/>
            <FilmInfoBottomPage filmCreditsData={filmCreditsData} filmInfoData={filmInfoData} />
        </div>
    );
}

export default FilmInfo;