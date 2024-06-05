// FacultyDisplay.js
import React from 'react';

function FacultyDisplay() {
  const faculties = ['Dr. Smith', 'Prof. Johnson', 'Dr. Brown', 'Prof. Taylor'];

  return (
    <div>
      <h2>Faculty List:</h2>
      <ul>
        {faculties.map((faculty, index) => (
          <li key={index}>{faculty}</li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyDisplay;
