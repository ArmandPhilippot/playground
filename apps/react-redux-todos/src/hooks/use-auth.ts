import { useMemo } from "react";
import { useAppSelector } from "../store";

export function useAuth() {
  const { currentUser, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  return useMemo(() => {
    return { isAuthenticated, currentUser };
  }, [currentUser, isAuthenticated]);
}
