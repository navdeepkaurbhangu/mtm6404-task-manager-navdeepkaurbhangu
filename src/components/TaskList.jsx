import React from "react";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <span>{task.text} ({task.priority})</span>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
