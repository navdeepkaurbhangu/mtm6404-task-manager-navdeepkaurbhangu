// src/pages/Tasks.jsx

import React, { useState } from "react";
import TaskList from "../components/TaskList"; // Import TaskList
import Card from "../components/Card"; // Import Card

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Implement Task List Component", completed: false },
    { id: 2, title: "Task 2", description: "Optimize for Mobile Devices", completed: false },
    { id: 3, title: "Task 3", description: "Create Navigation Bar", completed: false },
    { id: 4, title: "Task 4", description: "Add Task Deletion Feature", completed: false },
    { id: 5, title: "Task 5", description: "Use of props", completed: false },
  
  ]);

  const handleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Your Tasks</h1>
      <TaskList 
        tasks={tasks} 
        onComplete={handleComplete} 
        onDelete={handleDelete} 
      />
      {tasks.map(task => (
        <Card key={task.id} title={task.title} description={task.description}>
          <button onClick={() => handleComplete(task.id)}>Complete</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </Card>
      ))}
    </div>
  );
};

export default Tasks;
