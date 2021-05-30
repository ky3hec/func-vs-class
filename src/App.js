import React from "react";
import "./App.css";
import Button from "./components/Button.js";
import ImageListFunc from "./components/ImageListFunc.js";

function App() {
  const [func, setFunc] = React.useState(false);
  const toggle = () => {
    return setFunc(!func);
  };
  return (
    <div className="App">
      <Button name="ClassBased" action={toggle} />
      <Button name="Functional" action={toggle} />
      {func ? <ImageListFunc name="Functional" /> : <div>ClassBased</div>}
    </div>
  );
}

export default App;
