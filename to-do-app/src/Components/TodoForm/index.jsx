import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import "./style.scss";

TodoForm.propTypes = {
  isDark : PropTypes.bool.isRequired,
  handleTodoFormSubmit : PropTypes.func,
};

function TodoForm({isDark,handleTodoFormSubmit}) {
  const { register, handleSubmit,reset } = useForm();

  const handleSubmitForm = (values) => {
    handleTodoFormSubmit(values)
    reset({todo : ''})

  };

  return (
    <form className="to-do-form" onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        {...register("todo", { required: true })}
        className={clsx('input','transition',{
          'dark-form' : !isDark ? false : true
        })}
        type="text"
        placeholder="Create a new todo..."
        autoComplete = "off"
      />
    </form>
  );
}

export default TodoForm;
