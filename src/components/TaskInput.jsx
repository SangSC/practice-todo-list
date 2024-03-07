import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  //   console.log(task);
  const handleInputValue = (e) => {
    setTask(e.target.value);
  };

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  }

  return (
    <div className="todo-input">
      <h2 className="my-1">Add to list</h2>
      <form className="flex items-center" onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          className="mr-1"
          onChange={handleInputValue}
        />
        <button className="add-btn">+</button>
      </form>
    </div>
  );
};

export default TaskInput;
