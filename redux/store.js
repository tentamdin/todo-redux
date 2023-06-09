import todoReducer from "./todo/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todoReducer,
  },
});

export default store;
