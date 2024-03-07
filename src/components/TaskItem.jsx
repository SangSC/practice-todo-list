import React from "react";
import { ImCross } from "react-icons/im";

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <div className={task.checked ? "isChecked" : ""}>{task.taskName}</div>
      </div>
      <ImCross
        className="delete-icon"
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
};

export default TaskItem;
