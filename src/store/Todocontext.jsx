import React, { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodos: () => {},
  updateTodos: () => {},
  deleteTodos: () => {},
});

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload.todo, ...state];
    case "UPDATE_TODO":
      return state.map((e, index) => {
        if (index === action.payload.index) {
          return { ...e, ...action.payload.updatedtodo };
        }

        return e;
      });

    case "DELETE_TODO":
      return state.filter((e, index) => index !== action.payload.index);
  }
};

function TodoMaincontext({ children }) {
  const [todostate, dipatch] = useReducer(TodoReducer, []);

  const addTodo = (todo) => {
    dipatch({
      type: "ADD_TODO",
      payload: {
        todo,
      },
    });
  };

  const updateTodo = (index, todo) => {
    dipatch({
      type: "UPDATE_TODO",
      payload: {
        index,
        updatedtodo: todo,
      },
    });
  };

  const deleteTodo = (index) => {
    dipatch({
      type: "DELETE_TODO",
      payload: {
        index,
      },
    });
  };

  const TodoCtx = {
    todos: todostate,
    addTodos: addTodo,
    updateTodos: updateTodo,
    deleteTodos: deleteTodo,
  };

  return (
    <TodoContext.Provider value={TodoCtx}>{children}</TodoContext.Provider>
  );
}

export default TodoMaincontext;
