import React from "react";

function TodoInput({
  inputValue,
  handleInputChange,
  priority,
  handlePriorityChange,
  dueDate,
  handleDueDateChange,
  handleAddTodo,
}) {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="New task"
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
        placeholder="Due date"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
