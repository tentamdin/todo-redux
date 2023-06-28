import { createSlice, current } from "@reduxjs/toolkit";
import { v1 } from "uuid";

const initialState = {
  todos: [],
  editingItem: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = v1();
      const todo = {
        id,
        value: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    todoToggled: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    selectEditTodo: (state, action) => {
      const item = current(state).todos.find(({ id }) => id === action.payload);
      Object.assign(state.editingItem, item);
    },
    cancelEditTodo(state, action) {
      state.editingItem = {};
    },
    editTodo(state, action) {
      const items = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.value = action.payload.value;
        }
        return todo;
      });
      state.todos = items;
      state.editingItem = {};
    },
  },
});

export const {
  addTodo,
  todoToggled,
  deleteTodo,
  selectEditTodo,
  cancelEditTodo,
  editTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
