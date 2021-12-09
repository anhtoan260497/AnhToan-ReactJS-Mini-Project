import React from 'react';
import GameContainer from '../../components/GameContainer';
import {GithubOutlined} from '@ant-design/icons'
function PlayerType(props) {


    return (
        <div >
         <GameContainer />
       <a href="https://github.com/anhtoan260497/AnhToan-ReactJS-Mini-Project/tree/tic-tac-toe" title='Github Link' target={"_blank"} rel='noreferrer'><GithubOutlined style={{margin:'6rem 0',transform:'translate(48.5vw)',fontSize:'32px'}}/></a>
        </div>
    );
}

export default PlayerType;