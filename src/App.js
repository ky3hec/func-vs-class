import React from "react";
import "./App.css";
import Button from "./components/Button.js";
import ImageListFunc from "./components/ImageListFunc.js";
import ImageListClass from "./components/ImageListClass.js";

function App() {
  const [selection, setSelection] = React.useState(false);
  return (
    <div className="App">
      <div className="nav">
        <Button name="ClassBased" action={() => setSelection(false)} />
        <Button name="Functional" action={() => setSelection(true)} />
      </div>
      {selection ? (
        <ImageListFunc name="Functional" />
      ) : (
        <ImageListClass name="ClassBased" />
      )}
    </div>
  );
}

export default App;
