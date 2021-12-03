import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import clsx from 'clsx';

TodoOptions.propTypes = {
    isDark : PropTypes.bool.isRequired,
    quantity : PropTypes.number.isRequired,
    status :PropTypes.string.isRequired,
    handleStatusClick : PropTypes.func,
    handleClearClick : PropTypes.func,
};

function TodoOptions({isDark,quantity,handleStatusClick,handleClearClick,status}) {
    return (
        <div className={clsx('options',{
            'dark-options' : isDark ? true :false
        })}>
            <div className="options-items-left"> {quantity} {quantity > 1 ? 'items' : 'item' }</div>
            <div className="options-status">
                <div onClick={() => handleStatusClick('all')} className={clsx({ 'active': status === 'all' ? true : false})} >All</div>
                <div onClick={() => handleStatusClick('active')} className={clsx({ 'active': status === 'active' ? true : false})} >Active</div>
                <div onClick={() => handleStatusClick('completed')} className={clsx({ 'active': status === 'completed' ? true : false})} >Completed</div>
            </div>
            <div onClick={handleClearClick} className="options-clear-all">clear all</div>
        </div>
    );
}

export default TodoOptions;