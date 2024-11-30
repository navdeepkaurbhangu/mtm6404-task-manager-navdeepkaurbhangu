import React from 'react';
import { useAppContext } from '../context/AppContext'; // Correct import path

const ListView = () => {
  const { lists, deleteList } = useAppContext(); // Access context

  return (
    <div className="list-view-container">
      <h2>All Lists</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <span>{list.name}</span>
            <button onClick={() => deleteList(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
