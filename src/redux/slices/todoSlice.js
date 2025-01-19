import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos } from "../actions/task";
import { toast } from "react-toastify";
import { act } from "react";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
    success : false
  },
  extraReducers: (builder) => {
    builder
      // fetch todo
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.yourTasks;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // add new todo
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
        state.success = true
        toast.success("Task is Added!")
      })
      .addCase(addTodo.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload?.massage || "error while adding task,please try again after some time";
        toast.error("error while adding task,please try again after some time");
      })

      // delete task
      .addCase(deleteTodo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo._id !== action.payload);
         state.loading = false;
        state.error = null;
        toast.success(action.payload?.massage || "Task is Deleted Success Fully")
      })
      .addCase(deleteTodo.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload?.massage || "error while deleting task";
         toast.error("error while deleting task")
      });
  },
});

export default todoSlice.reducer;
