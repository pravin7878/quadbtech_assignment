import {createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios";

const API_URL = "https://task-manager-3745.onrender.com";

// Thunks for CRUD operations
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async ({ token, todo }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, todo, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async ({ token, id }, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
