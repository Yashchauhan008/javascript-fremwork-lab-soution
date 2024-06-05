// EventHandlingComponent.js
import React from 'react';

function EventHandlingComponent() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default EventHandlingComponent;
