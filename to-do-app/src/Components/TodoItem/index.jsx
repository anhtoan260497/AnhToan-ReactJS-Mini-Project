import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import clsx from 'clsx';
import {CheckCircleOutlined} from '@ant-design/icons'

TodoItem.propTypes = {
    isDark : PropTypes.bool.isRequired,
    todoRender: PropTypes.string.isRequired,
    idx : PropTypes.number.isRequired,
    handleClickItem : PropTypes.func,
    handleClickButton: PropTypes.func,
    isCompleted : PropTypes.bool.isRequired,
    
};

function TodoItem({isDark,todoRender,idx,handleClickItem,isCompleted,handleClickButton}) {
    return (
        <div className={clsx('to-do-item',{
            'dark-item' : isDark ? true : false,
            'completed' : isCompleted ? true : false 
        })}
        >
            <div className="to-do-description" style={{width:'100%',height:'100%'}}  onClick={()=>handleClickItem(idx)}>{todoRender}</div>

            <button className={clsx('btn',{ // mặc định button là display none trong SCSS
                'dark-btn' : isDark ? true : false, // có class khi có dark mode
                'btn-show' : isCompleted ? true : false // có button khi việc đã hoàn thành , display :block trong CSS
            })}           
            ><CheckCircleOutlined  onClick = {()=>handleClickButton(idx)}   style={{fontSize:'1.3rem',color:'rgb(240,240,240)'}} /></button> 
        </div>
    );
}

export default TodoItem;