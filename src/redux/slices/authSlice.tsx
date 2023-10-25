import { ECCOMMERCE_ROLE, ECCOMMERCE_TOKEN } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";

const token = getCookie(ECCOMMERCE_ROLE);

const initialState: { isAuthenticated: boolean; role: number | null } = {
  isAuthenticated: Boolean(getCookie(ECCOMMERCE_TOKEN)),
  role: token ? +token : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload;
    },
    setRole(state, { payload }) {
      state.role = payload;
    },
  },
});

export const { setIsAuthenticated, setRole } = authSlice.actions;

export default authSlice.reducer;
