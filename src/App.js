import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
