// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tasks from "./pages/Tasks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css"; // Ensure this file is included

export default function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
