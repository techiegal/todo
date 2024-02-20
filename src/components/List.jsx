import React, { useState } from "react";

function List({ todo, index, handleClick, handleDelete }) {
  const [isChecked, setChecked] = useState(false);

  const handleChnage = () => {
    setChecked((prevsate) => !prevsate);
  };
  return (
    <li>
      <input type="checkbox" onChange={handleChnage} checked={isChecked} />
      {todo.title} <button onClick={() => handleClick(index)}>Edit</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
}

export default List;
