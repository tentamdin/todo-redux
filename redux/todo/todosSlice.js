// import {
//   ADD_TODO,
//   COMPLETED_TODO,
//   DELETE_TODO,
//   EDIT_TODO,
//   SELECT_EDIT_ITEM,
//   CANCEL_EDIT_ITEM,
// } from "./todoTypes";
// import { v1 } from "uuid";

// const initialState = {
//   todos: [],
//   editingItem: {},
// };

// export const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO: {
//       const id = v1();
//       const todoItem = {
//         id,
//         value: action.payload.value,
//         completed: false,
//       };
//       return {
//         ...state,
//         todos: [...state.todos, todoItem],
//       };
//     }
//     case SELECT_EDIT_ITEM: {
//       const item = state.todos.find(({ id }) => id === action.payload.id);
//       console.log("Selected reducer", item);
//       return { ...state, editingItem: item };
//     }
//     case EDIT_TODO: {
//       console.log("Edit todo", action.payload.editItem);
//       const items = state.todos.map((todo) => {
//         if (todo.id === action.payload.editItem.id) {
//           todo.value = action.payload.editItem.value;
//         }

//         return todo;
//       });
//       return {
//         ...state,
//         todos: items,
//         editingItem: {},
//       };
//     }
//     case CANCEL_EDIT_ITEM: {
//       const newState = state.todos.length
//         ? { ...state, editingItem: {} }
//         : { ...state };
//       return newState;
//     }
//     case COMPLETED_TODO: {
//       const items = state.todos.map((todo) => {
//         if (todo.id === action.payload.completedItem.id) {
//           const newItem = { ...todo };
//           newItem.completed = !newItem.completed;
//           return newItem;
//         }

//         return todo;
//       });
//       return {
//         ...state,
//         todos: items,
//       };
//     }
//     case DELETE_TODO: {
//       return {
//         ...state,
//         todos: state.todos.filter(({ id }) => id !== action.payload.id),
//       };
//     }
//     default:
//       state;
//   }
// };

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
      console.log("New todo", todo, action.payload);
      state.todos.push(todo);
    },
    todoToggled: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      console.log("Delete todo", action);
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    selectEditTodo: (state, action) => {
      console.log(
        "selected todo to edit",
        action.payload,
        "current todo ",
        current(state)
      );
      const item = current(state).todos.find(({ id }) => id === action.payload);
      console.log("Selected reducer item", item);
      Object.assign(state.editingItem, item);
    },
    cancelEditTodo(state, action) {
      console.log("cancle edit", state.editingItem);
      state.editingItem = {};
    },
    editTodo(state, action) {
      console.log("Edit todo", action.payload);
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
