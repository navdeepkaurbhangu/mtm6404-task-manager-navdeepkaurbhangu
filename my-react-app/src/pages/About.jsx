import React from 'react';
import './About.css'; // Ensure you have an About.css for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Task Manager</h1>
      <p>
        Task Manager was designed with productivity in mind. Our mission is to create a platform that makes managing tasks simple and intuitive. 
        Whether you're juggling daily to-dos or tracking a large project, Task Manager can help you stay on top of things.
      </p>

      <h2>Our Features:</h2>
      <ul>
        <li>Task Creation: Add and manage tasks easily.</li>
        <li>Task Completion: Mark tasks as complete and move them out of your way.</li>
        <li>Task Deletion: Remove unnecessary tasks with a single click.</li>
        <li>Responsive Design: Access your tasks from any device, anywhere.</li>
      </ul>

      <h2>Why Choose Task Manager?</h2>
      <p>
        At Task Manager, we believe that simplicity is the key to productivity. Our app is built to minimize distractions and maximize efficiency. 
        With our clean interface and practical features, you can focus on what matters most—getting things done!
      </p>
      <p>
        We are committed to continuous improvement and adding features that truly matter to you. 
        Your feedback helps us grow and shape our app to better serve your needs.
      </p>
    </div>
  );
};

export default About;
