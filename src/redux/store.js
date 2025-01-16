import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import todosReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export default store;
