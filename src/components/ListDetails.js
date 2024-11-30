import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function ListDetails() {
  const { lists, updateList, deleteList } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const list = lists.find((list) => list.id === id);

  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const updatedTasks = [
      ...list.tasks,
      {
        id: Date.now().toString(),
        task: newTask,
        priority,
        completed: false,
      },
    ];

    updateList({ ...list, tasks: updatedTasks });
    setNewTask('');
    setPriority('Low');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = list.tasks.filter((task) => task.id !== taskId);
    updateList({ ...list, tasks: updatedTasks });
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = list.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateList({ ...list, tasks: updatedTasks });
  };

  return (
    <div className="list-details-container">
      <h2>{list.name}</h2>

      {/* Add Task Box */}
      <div className="add-task-box">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task List Box */}
      <div className="task-list-box">
        <ul>
          {list.tasks
            .sort((a, b) =>
              a.priority === b.priority
                ? 0
                : a.priority === 'High'
                ? -1
                : 1
            )
            .map((task) => (
              <li key={task.id}>
                <span
                  className={task.completed ? 'completed' : ''}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.task} (Priority: {task.priority})
                </span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ListDetails;
