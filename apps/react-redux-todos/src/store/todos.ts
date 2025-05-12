import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../types/data";
import { slugify } from "../utils/helpers";

const initialState: Todo[] = [
  {
    id: nanoid(),
    body: "",
    createdAt: new Date().toISOString(),
    done: false,
    slug: "build-a-todo-app",
    title: "Build a todo app",
    userId: "demo",
  },
] satisfies Todo[];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: ({
        userId,
        title,
        body = "",
      }: Omit<Todo, "id" | "createdAt" | "done" | "slug">) => {
        const id = nanoid();
        const createdAt = new Date().toISOString();
        const slug = slugify(title);
        return {
          payload: { id, body, createdAt, done: false, slug, title, userId },
        };
      },
    },
    deleteTodo: (state, action: PayloadAction<Todo["id"]>) =>
      state.filter((todo) => todo.id !== action.payload),
    updateTodo: (state, action: PayloadAction<Omit<Todo, "slug">>) =>
      state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          ...action.payload,
          slug: slugify(action.payload.title),
        };
      }),
    toggleTodo: (state, action: PayloadAction<Todo["id"]>) =>
      state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return { ...todo, done: !todo.done };
      }),
    deleteAllTodos: () => [],
  },
});

const { actions, reducer: todosReducer } = todosSlice;

const { addTodo, deleteTodo, updateTodo, toggleTodo, deleteAllTodos } = actions;

export {
  todosReducer,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
  deleteAllTodos,
};
