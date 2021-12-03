import React, { useEffect, useRef, useState } from "react";
import TodoForm from "../../Components/TodoForm";
import TodoItems from "../TodoItems";
import TodoOptions from "../TodoOptions";

function TodoList({ isDark }) {
  const [todo, setTodo] = useState([]);
  const [todoRender, setTodoRender] = useState(todo);
  const [status, setStatus] = useState("all");
  const todoAll = useRef([]); // tạo Ref để giữ giá trị của mảng todo All

  // Submit 
  const handleTodoFormSubmit = (values) => {
    const newTodoInput = {
      job: values.todo,
      completed: false,
    };
    const newTodo = [...todo, newTodoInput];
    setTodo(newTodo);
  };

  useEffect(() => {
    todoAll.current = todo;
  }, [todo]); // gán todo hiện tại cho Ref todo All


  //useEffect cho việc hiển thị số lượng công việc tuỳ vào trạng thái
  useEffect(() => {
    const newTodoClone = [...todo];
    switch (status) {
      case "all":
        setTodoRender(todo); 
        break;
      case "active":
        const activeTodoList = newTodoClone.filter(
          (item) => item.completed === false
        );
        setTodoRender(activeTodoList);
        break;
      case "completed":
        const completedTodoList = newTodoClone.filter(
          (item) => item.completed === true
        );
        setTodoRender(completedTodoList);
        break;
      default:
        return null;
    }
  }, [status, todo]);

  const handleClickItem = (idx) => {
    if (todo[idx].completed === "true") return;
    if (status === "all") {
      const newTodoList = [...todoAll.current];
      newTodoList[idx].completed = true;
      setTodo(newTodoList);
    } else if (status === "active") {
      const newTodoList = [...todoRender];
      newTodoList[idx].completed = true;
      setTodo(newTodoList);
    }

    console.log(idx);
  };

  // Click nút xoá
  const handleClickButton = (idx) => {
    const newTodoList = [...todo];
    newTodoList.splice(idx, 1);
    setTodo(newTodoList);
  };

  // Click Status
  const handleStatusClick = (status) => {
    setStatus(status);
  };

  // Click nút Clear
  const handleClearClick = () => {
    setTodo([]);
  };

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
          status={status}
        />
      ) : null}
    </div>
  );
}

export default TodoList;
