import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/data";

const initialState: User[] = [
  {
    id: "demo",
    createdAt: new Date().toISOString(),
    username: "Demo",
    email: "demo@email.com",
    password: "demo",
  },
] satisfies User[];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload);
      },
      prepare: (username, email, password) => {
        const id = nanoid();
        const createdAt = new Date().toISOString();
        return { payload: { id, username, email, password, createdAt } };
      },
    },
    deleteUser: (state, action: PayloadAction<User["id"]>) => {
      state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.map((user) => {
        if (user.id !== action.payload.id) return user;
        return { ...user, ...action.payload };
      });
    },
  },
});

const { actions, reducer: usersReducer } = usersSlice;
const { addUser, deleteUser, updateUser } = actions;

export { usersReducer, addUser, deleteUser, updateUser };
