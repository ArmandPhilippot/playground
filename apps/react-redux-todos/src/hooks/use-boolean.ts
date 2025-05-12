import { useCallback, useState } from "react";

export function useBoolean(initialState: boolean = false) {
  const [state, setState] = useState(initialState);

  const activate = useCallback(() => {
    setState(true);
  }, []);

  const deactivate = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return { activate, deactivate, state, toggle };
}
