import React from "react";
import {BiPlusMedical} from "react-icons/bi"

import "./Form.css";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const todoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={todoHandler} className="todo-button" type="submit">
          <BiPlusMedical />
        </button>
        <div className="select">
          <select onChange={statusHandler} className="filter-todo" name="todos">
            <option value="all"> All </option>
            <option value="completed"> completed </option>
            <option value="uncompleted"> uncompleted </option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
