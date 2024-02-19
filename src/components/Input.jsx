import React, { useContext, useRef } from "react";

import { TodoContext } from "../store/Todocontext";

function Input() {
  const input = useRef();
  const { addTodos } = useContext(TodoContext);

  const handleClick = () => {
    if (input.current.value.trim() == "") {
      alert("enter something to continue ");
      return;
    }
    const todoObj = {
      title: input.current.value,
    };
    addTodos(todoObj);
    input.current.value = "";
  };

  return (
    <div className="add">
      <input type="text" ref={input} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Input;
