// ArrayDisplay.js
import React from 'react';

function ArrayDisplay() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div>
      <h2>Names List:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayDisplay;
