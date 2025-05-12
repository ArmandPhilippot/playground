import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Auth } from "../types/data";

const initialState: Auth = {
  currentUser: null,
  isAuthenticated: false,
} satisfies Auth;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth["currentUser"]>) => {
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
      };
    },
    logout: () => initialState,
  },
});

const { actions, reducer: authReducer } = authSlice;
const { login, logout } = actions;

export { authReducer, login, logout };
