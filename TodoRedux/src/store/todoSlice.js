import { createSlice } from "@reduxjs/toolkit";

//initial state of the component
const initialState = {
  todos: [
    {
      id: crypto.randomUUID(), //get random id
      todoText: "TODO Text",
      complete: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: crypto.randomUUID(),
        todoText: action.payload,
        complete: false,
      };
      state.todos = [...state.todos, todo];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todoText: action.payload.todoText }
          : todo
      );
    },
  },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
