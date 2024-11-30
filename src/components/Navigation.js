import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navigation() {
  const { lists } = useContext(AppContext);

  return (
    <nav>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
