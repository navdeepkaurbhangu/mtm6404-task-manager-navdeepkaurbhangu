import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
export const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Provider component that wraps the app with the context
export const AppProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem('lists')) || [];
    setLists(savedLists);
  }, []);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const addList = (name) => {
    const newList = {
      id: Date.now().toString(),
      name,
      tasks: [],
    };
    setLists([...lists, newList]);
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const updateList = (updatedList) => {
    setLists(lists.map((list) => (list.id === updatedList.id ? updatedList : list)));
  };

  return (
    <AppContext.Provider value={{ lists, addList, deleteList, updateList }}>
      {children}
    </AppContext.Provider>
  );
};
