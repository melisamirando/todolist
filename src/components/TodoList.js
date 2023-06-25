import React from "react";

function TodoList({ todos, handleToggleComplete, handleDeleteTodo }) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {todo.priority === "High" && (
              <span style={{ marginLeft: "10px" }}>High</span>
            )}
            <span style={{ marginLeft: "10px" }}>Due date: {todo.dueDate}</span> <br />
            {todo.task} <br />
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            {/* <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                paddingLeft: "10px",
              }}
            ></span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
