import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Only wrap the App with Router here
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
