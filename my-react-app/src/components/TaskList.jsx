// src/components/TaskList.jsx

import React from "react";
import TaskItem from "./TaskItem"; // Import TaskItem component

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onComplete={onComplete} 
              onDelete={onDelete} 
            />
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
