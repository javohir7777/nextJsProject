import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
