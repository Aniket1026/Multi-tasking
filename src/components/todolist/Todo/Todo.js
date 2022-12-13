import React from "react";
import { BiCheck} from "react-icons/bi";
import { FaPrescriptionBottle } from "react-icons/fa";


const Todo = ({ todos, todo, setTodos, text }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}{" "}
      </li>
      <button onClick={completeHandler} className="complete-btn">
              <BiCheck />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <FaPrescriptionBottle />
      </button>
    </div>
  );
};

export default Todo;
