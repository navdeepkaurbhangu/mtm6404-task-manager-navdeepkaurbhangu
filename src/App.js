import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AddListForm from './components/AddListForm';
import ListDetails from './components/ListDetails';
import Navigation from './components/Navigation';
import ListView from './components/ListView';
import './App.css';  // Import App.css for styles

function App() {
  const [showAllLists, setShowAllLists] = useState(false);

  const toggleShowAllLists = () => {
    setShowAllLists((prevState) => !prevState);
  };

  return (
    <AppProvider>
      <Header />
      <div className="app-container">
        <Navigation />
        <button 
          onClick={toggleShowAllLists} 
          className="view-all-button"
        >
          {showAllLists ? 'Hide All Lists' : 'View All Lists'}
        </button>
        {showAllLists ? (
          <ListView />
        ) : (
          <div className="add-list-container">
            <AddListForm />
          </div>
        )}
        <Routes>
          <Route path="/" element={<h2>Select a list to view</h2>} />
          <Route path="/list/:id" element={<ListDetails />} />
        </Routes>
      </div>
      <Footer />
    </AppProvider>
  );
}

export default App;
