import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles.css"; // Ensure this path is correct

function App() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    showCompleted ? true : !task.completed
  );

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Task Manager</h1>
                <TaskForm addTask={addTask} />
                <TaskList
                  tasks={filteredTasks}
                  toggleTaskCompletion={toggleTaskCompletion}
                  deleteTask={deleteTask}
                />
                <button onClick={() => setShowCompleted((prev) => !prev)}>
                  {showCompleted ? "Hide Completed" : "Show Completed"}
                </button>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
