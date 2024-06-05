// ConditionalRenderingComponent.js
import React from 'react';

function ConditionalRenderingComponent({ isDisplay }) {
  return (
    <div>
      {isDisplay ? <h1>This element is displayed because isDisplay is true</h1> : null}
    </div>
  );
}

export default ConditionalRenderingComponent;
