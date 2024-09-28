// src/components/Card.jsx

import React from "react";
import './Card.css'; // Create Card.css for specific card styles

export default function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button">Edit</button>
    </div>
  );
}
