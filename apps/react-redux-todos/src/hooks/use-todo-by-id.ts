import { useMemo } from "react";
import { useAppSelector } from "../store";

export function useTodoById(id: string | null) {
  const currentTodo = useAppSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  );

  return useMemo(() => currentTodo, [currentTodo]);
}
