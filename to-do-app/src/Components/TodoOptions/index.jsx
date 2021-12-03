import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import clsx from 'clsx';

TodoOptions.propTypes = {
    isDark : PropTypes.bool.isRequired,
    quantity : PropTypes.number.isRequired,
    handleStatusClick : PropTypes.func,
    handleClearClick : PropTypes.func,
};

function TodoOptions({isDark,quantity,handleStatusClick,handleClearClick}) {
    return (
        <div className={clsx('options',{
            'dark-options' : isDark ? true :false
        })}>
            <div className="options-items-left"> {quantity} {quantity > 1 ? 'items' : 'item' }</div>
            <div className="options-status">
                <div onClick={() => handleStatusClick('all')} >All</div>
                <div onClick={() => handleStatusClick('active')} >Active</div>
                <div onClick={() => handleStatusClick('completed')}>Completed</div>
            </div>
            <div onClick={handleClearClick} className="options-clear-all">clear all</div>
        </div>
    );
}

export default TodoOptions;