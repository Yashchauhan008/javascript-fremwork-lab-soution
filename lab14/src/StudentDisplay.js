// StudentDisplay.js
import React from 'react';

function StudentDisplay() {
  const students = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div>
      <h2>Student List:</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDisplay;
