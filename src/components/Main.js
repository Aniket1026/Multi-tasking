import React, { useState, useEffect } from "react";

import Form from "./todolist/Form/Form";
import Todolist from "./todolist/Todo/Todolist";

function Main() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  });

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  return (
    <div className="Main">
      <header>
        <h1> KETU'S TODO LIST </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <Todolist todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default Main;
