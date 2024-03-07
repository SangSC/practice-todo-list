import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TaskInput from "./components/TaskInput";
import Toggle from "./components/Toggle";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="task-container">
        <h1>Todo List</h1>
        <p className="text-[10px]">Add things to do</p>
        <hr />
        <ProgressBar />

        {/* todo container */}
        <div className="toDoList">
          <ul className="list-items">
            {toDoList
              .slice()
              .reverse()
              .map((task, key) => (
                <TaskItem
                  task={task}
                  key={key}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                />
              ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">No task to do</p>
          ) : null}
        </div>
        <hr />

        {/* toggle sort */}
        <div className="h-[80px] flex justify-end">
          <p className="text-[15px] text-muted mr-2">
            Move done things to the end?
          </p>
          <Toggle />
        </div>

        <TaskInput addTask={addTask} />
      </div>
    </>
  );
};

export default App;
