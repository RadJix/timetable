import React from "react";
import './App.css';
import store from "./redux/store";
import SchoolContainer from "./components/School";


function App() {
  return (
      <SchoolContainer store={store}></SchoolContainer>
  );
}

export default App;
