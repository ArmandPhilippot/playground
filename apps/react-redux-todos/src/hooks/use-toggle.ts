import { useBoolean } from "./use-boolean";

export function useToggle(initialState: boolean = false) {
  const { state, toggle } = useBoolean(initialState);

  return [state, toggle] as const;
}
