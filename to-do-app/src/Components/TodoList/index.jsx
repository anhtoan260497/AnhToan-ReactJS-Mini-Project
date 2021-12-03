import React, { useEffect, useState } from "react";
import TodoForm from "../../Components/TodoForm";
import TodoItems from "../TodoItems";
import TodoOptions from "../TodoOptions";

function TodoList({ isDark }) {
  const [todo, setTodo] = useState([]);
  const [todoRender, setTodoRender] = useState(todo);
  const [status, setStatus] = useState("all");

  const handleTodoFormSubmit = (values) => {
    const newTodoInput = {
      job: values.todo,
      completed: false,
    };
    const newTodo = [...todo, newTodoInput];
    setTodo(newTodo);
  };

  useEffect(() => {
    const newTodoClone = [...todo];
    switch (status) {
      case "all":
        setTodoRender(todo);
        break;
      case "active":
        const activeTodoList = newTodoClone.filter((item) => item.completed === false);
        setTodoRender(activeTodoList);
        break;
    case 'completed':
        const completedTodoList = newTodoClone.filter((item) => item.completed === true);
        setTodoRender(completedTodoList);
        break
      default:
        return null;
    }
  }, [status, todo]);

  const handleClickItem = (idx) => {
    if (todo[idx].completed === "true") return;
    const newTodoList = [...todo];
    newTodoList[idx].completed = true;
    setTodo(newTodoList);
  };

  const handleClickButton = (idx) => {
    const newTodoList = [...todo];
    newTodoList.splice(idx, 1);
    setTodo(newTodoList);
  };

  const handleStatusClick = (status) => {
    setStatus(status);
  };

  const handleClearClick = () => {
      setTodo([])
  }

  return (
    <div>
      <TodoForm isDark={isDark} handleTodoFormSubmit={handleTodoFormSubmit} />
      <TodoItems
        isDark={isDark}
        todoRender={todoRender}
        handleClickItem={handleClickItem}
        handleClickButton={handleClickButton}
      />
      {todo.length > 0 ? (
        <TodoOptions
          quantity={todoRender.length}
          isDark={isDark}
          handleStatusClick={handleStatusClick}
          handleClearClick={handleClearClick}
        />
      ) : null}
    </div>
  );
}

export default TodoList;
