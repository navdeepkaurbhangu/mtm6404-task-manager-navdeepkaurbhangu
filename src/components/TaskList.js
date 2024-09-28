import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';  

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Finish React project', dueDate: '2024-09-25' },
    { id: 2, title: 'Buy groceries', dueDate: '2024-09-26' },
    { id: 3, title: 'Prepare for meeting', dueDate: '2024-09-27' },
    { id: 4, title: 'Exercise', dueDate: '2024-09-28' },
    { id: 5, title: 'Read a book', dueDate: '2024-09-29' },
  ];

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Task List</h2>
      <div className="task-items-container">
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} dueDate={task.dueDate} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
