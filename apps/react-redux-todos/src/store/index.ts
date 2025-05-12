import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { LocalStorage } from "../services/LocalStorage";
import type { Todo, User } from "../types/data";
import { authReducer, login, logout } from "./auth";
import {
  addTodo,
  deleteAllTodos,
  deleteTodo,
  todosReducer,
  toggleTodo,
  updateTodo,
} from "./todos";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
  users: usersReducer,
});

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: login,
  effect: ({ payload }) => {
    LocalStorage.set("todoUser", payload);
  },
});

listenerMiddleware.startListening({
  actionCreator: logout,
  effect: () => {
    LocalStorage.remove("todoUser");
  },
});

listenerMiddleware.startListening({
  actionCreator: addTodo,
  effect: ({ payload }, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    LocalStorage.set("todoList", [...state.todos, payload]);
  },
});

listenerMiddleware.startListening({
  actionCreator: deleteTodo,
  effect: ({ payload }, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    LocalStorage.set(
      "todoList",
      state.todos.filter((todo) => todo.id !== payload)
    );
  },
});

listenerMiddleware.startListening({
  actionCreator: deleteAllTodos,
  effect: () => {
    LocalStorage.set("todoList", []);
  },
});

listenerMiddleware.startListening({
  actionCreator: toggleTodo,
  effect: ({ payload }, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    LocalStorage.set(
      "todoList",
      state.todos.map((todo) =>
        todo.id === payload ? { ...todo, done: !todo.done } : todo
      )
    );
  },
});

listenerMiddleware.startListening({
  actionCreator: updateTodo,
  effect: ({ payload }, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    LocalStorage.set(
      "todoList",
      state.todos.map((todo) => {
        if (payload.id !== todo.id) {
          return todo;
        }

        return payload;
      })
    );
  },
});

const storedUser = LocalStorage.get<User>("todoUser");
const preloadedAuth =
  storedUser === undefined
    ? undefined
    : { isAuthenticated: true, currentUser: storedUser };

const storedTodos = LocalStorage.get<Todo[]>("todoList");

const preloadedState = {
  auth: preloadedAuth,
  todos: storedTodos,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    /* eslint-disable-next-line unicorn/prefer-spread -- Redux discourage the use of spread syntax here. */
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
  preloadedState,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export {
  addTodo,
  deleteAllTodos,
  deleteTodo,
  login,
  logout,
  toggleTodo,
  updateTodo,
};

export default store;
