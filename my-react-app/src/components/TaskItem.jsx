// src/components/TaskItem.jsx

import React from "react";

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
