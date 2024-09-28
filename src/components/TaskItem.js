import React from 'react';
import './TaskItem.css';  // Import TaskItem styling

const TaskItem = ({ title, dueDate }) => {
  return (
    <div className="task-item">
      <h3 className="task-title">{title}</h3>
      <p className="task-date">Due Date: {dueDate}</p>
    </div>
  );
};

export default TaskItem;
