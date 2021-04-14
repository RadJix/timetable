import React from "react";
import "./App.css";
import Schools from "./components/schools/Schools";
import state from "./state/state";

function App() {
  return <Schools state={state} />;
}

export default App;
