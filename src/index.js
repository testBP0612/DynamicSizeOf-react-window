import React from "react";
import ReactDOM from "react-dom";
import Chat from "./Chat";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
