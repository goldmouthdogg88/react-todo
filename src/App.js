import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Title from "./components/Title";
import "./App.css";

const initialData = [
  {
    _id: 0,
    text: "Call mom",
  },
  {
    _id: 1,
    text: "Work out",
  },
  {
    _id: 2,
    text: "Finish ReactJS talk",
  },
];

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initialData);

  const handleSubmit = () => {
    if (inputValue === "") return;
    const newTodo = { _id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo._id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todolist">
        <Title myName="goldmouthdogg" />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            handleDeleteTodo={handleDeleteTodo}
            key={todo._id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
