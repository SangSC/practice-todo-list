import React, { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import TaskInput from "./components/TaskInput";
import Toggle from "./components/Toggle";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);
  const [checkedPercentage, setCheckedPercentage] = useState(0);

  // sort the list
  useEffect(() => {
    // if moveDoneToEnd is true, sort the list
    sortToDoList();
  }, [moveDoneToEnd, toDoList]);

  // calculate the percentage of checked tasks
  useEffect(() => {
    const checkedTasks = toDoList.filter((task) => task.checked);
    const percentage = (checkedTasks.length / toDoList.length) * 100;
    setCheckedPercentage(percentage);
  }, [toDoList]);

  // add task
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  // delete task
  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  // check the task
  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  // sort the list
  function sortToDoList() {
    // if moveDoneToEnd is true, sort the list
    if (moveDoneToEnd) {
      const sortedList = [...toDoList].sort((a, b) =>
        a.checked === b.checked ? 0 : a.checked ? -1 : 1
      );

      setToDoList(sortedList);
    }
  }

  return (
    <>
      <div className="task-container">
        <h1>Todo List</h1>
        <p className="text-[10px]">Add things to do</p>
        <hr />

        {/* progress bar */}
        <ProgressBar percentage={checkedPercentage} />

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
          {/* if the list is empty */}
          {toDoList.length === 0 ? (
            <p className="notify">No task to do</p>
          ) : null}
        </div>
        <hr />

        {/* toggle sort */}
        <div className="h-[70px] flex justify-end">
          <p className="text-[15px] text-muted mr-2">
            Move done things to the end?
          </p>
          <Toggle handleToggle={setMoveDoneToEnd} />
        </div>

        {/* input */}
        <TaskInput addTask={addTask} />
      </div>
    </>
  );
};

export default App;
