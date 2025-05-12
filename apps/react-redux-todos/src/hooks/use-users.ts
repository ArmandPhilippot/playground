import { useMemo } from "react";
import { useAppSelector } from "../store";

export function useUsers() {
  const users = useAppSelector((state) => state.users);

  return useMemo(() => users, [users]);
}
