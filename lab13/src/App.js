// App.js
import React from "react";
import MyFunctionComponent from "./MyFunctionComponent";
import MessageComponent from "./MessageComponent";
import EventHandlingComponent from "./EventHandlingComponent";
import ConditionalRenderingComponent from "./ConditionalRenderingComponent";

function App() {
  return (
    <div>
      <MyFunctionComponent />
      <MessageComponent message="Hello, this is a message passed as props!" />
      <EventHandlingComponent />
      <ConditionalRenderingComponent isDisplay={true} />
      <ConditionalRenderingComponent isDisplay={false} />
    </div>
  );
}

export default App;
