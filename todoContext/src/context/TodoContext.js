import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: crypto.randomUUID(),
      todo: "Create your first todo here!",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  upateTodo: (id, todo) => {},
  taskComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
