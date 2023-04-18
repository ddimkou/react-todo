import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./app.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) {
      return [];
    } else {
      return JSON.parse(localValue);
    }
  });

  const addBtn = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Form input={input} setInput={setInput} addBtn={addBtn} />
      <h1 className="header">To-do List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
