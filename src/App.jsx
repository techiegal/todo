// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Display from "./components/Display";
import TodoMaincontext from "./store/Todocontext";
import { useContext } from "react";

function App() {
  return (
    <>
      <TodoMaincontext>
        <Input />
        <Display />
      </TodoMaincontext>
    </>
  );
}

export default App;
