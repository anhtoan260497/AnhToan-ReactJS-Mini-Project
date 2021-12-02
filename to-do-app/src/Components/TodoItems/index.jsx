import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import TodoItem from "../TodoItem";

TodoItems.propTypes = {
    isDark : PropTypes.bool.isRequired,
    todoRender : PropTypes.array.isRequired,
    handleClickItem : PropTypes.func,
    handleClickButton : PropTypes.func,
};

function TodoItems({ isDark, todoRender, handleClickItem, handleClickButton }) {
  const renderTodos = () => {
    return todoRender.map((item, idx) => {
      return (
        <TodoItem
          isCompleted={item.completed}
          todoRender={item.job}
          isDark={isDark}
          key={idx}
          idx={idx}
          handleClickItem={handleClickItem}
          handleClickButton = {handleClickButton}
        />
      );
    });
  };

  return <div className="todo-items-container">{renderTodos()}</div>;
}

export default TodoItems;
