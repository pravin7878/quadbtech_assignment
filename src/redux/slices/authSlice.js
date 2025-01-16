import { createSlice } from "@reduxjs/toolkit";

// actions
import { loginUser , registerUser } from "../actions/user";
import { toast } from "react-toastify";


const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  success: false,
};


  

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Registration cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        toast.success(
          payload.massage || "Registration successful. Please log in."
        );
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("Registration failed. Please try again.");
      })
     
      //   loginUser cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.user = { name: payload.name, userId: payload.userId };
        state.token = payload.accessToken;
        toast.success(payload.massage || "login success.");

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify({ name: payload.name, userId: payload.userId }));
        localStorage.setItem("token", payload.accessToken);
        
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
         toast.error("Login failed. Please try again.");
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
