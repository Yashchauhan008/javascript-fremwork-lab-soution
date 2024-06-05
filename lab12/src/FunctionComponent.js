import React, { useState } from 'react';

function FunctionComponent() {
  const [message, setMessage] = useState('Hello from Function Component!');

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default FunctionComponent;
