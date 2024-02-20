import { useContext, useRef, useState } from "react";
import { TodoContext } from "../store/Todocontext";
import Modal from "./Modal";
import List from "./List";

function Display() {
  const { todos, updateTodos, deleteTodos } = useContext(TodoContext);
  const [editState, setEditState] = useState({});
  var updateindex = 0;
  const modal = useRef();

  const handleClick = (id) => {
    modal.current.open();
    const editable = todos[id];
    setEditState(editable);
    updateindex = id;
  };

  const handleChange = (e) => {
    setEditState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClickUpdate = () => {
    updateTodos(updateindex, editState);
    setEditState({});
    modal.current.close();
  };

  const handleDelete = (index) => {
    deleteTodos(index);
  };

  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <List
              // key={todo.title}
              todo={todo}
              index={index}
              handleClick={handleClick}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <p>No todos added</p>
      )}
      <Modal ref={modal}>
        <h2>Edit </h2>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={editState.title || ""}
        />
        <button onClick={handleClickUpdate}>Update</button>
      </Modal>
    </div>
  );
}

export default Display;
