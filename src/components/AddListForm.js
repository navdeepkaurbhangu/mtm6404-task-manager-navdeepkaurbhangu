import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext'; // Correct import path

const AddListForm = () => {
  const [listName, setListName] = useState('');
  const { addList } = useAppContext(); // Access context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listName) {
      addList(listName); // Add list to the context
      setListName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Enter list name"
        required
      />
      <button type="submit">Add List</button>
    </form>
  );
};

export default AddListForm;
