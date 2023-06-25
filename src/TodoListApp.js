import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        task: inputValue,
        completed: false,
        priority: priority,
        dueDate: dueDate,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
      setDueDate("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        priority={priority}
        handlePriorityChange={handlePriorityChange}
        dueDate={dueDate}
        handleDueDateChange={handleDueDateChange}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoApp;
