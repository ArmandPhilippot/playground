import { useMemo } from "react";
import { useAppSelector } from "../store";

export function useTodos(userId?: string) {
  const todos = useAppSelector((state) => state.todos);

  return useMemo(() => {
    if (userId === undefined) return todos;
    return todos.filter((todo) => todo.userId === userId);
  }, [todos]);
}
