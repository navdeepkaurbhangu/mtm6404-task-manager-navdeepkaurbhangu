import React from 'react';
import './Home.css'; // Ensure you have a Home.css for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Task Manager</h1>
      <p>
        Welcome to Task Manager, your simple and effective solution for organizing and managing tasks. 
        Whether you’re managing personal projects or working in a team, Task Manager provides you with a platform to keep track of your tasks with ease.
      </p>
      <h2>Our features include:</h2>
      <ul>
        <li>Creating and managing task lists</li>
        <li>Marking tasks as complete</li>
        <li>Deleting tasks when they are no longer needed</li>
        <li>Viewing tasks with deadlines and priority settings</li>
        <li>Fully responsive design to work on all devices</li>
      </ul>
      <p>
        Stay organized and productive by managing all your tasks in one place. Let’s get started!
      </p>
    </div>
  );
};

export default Home;
