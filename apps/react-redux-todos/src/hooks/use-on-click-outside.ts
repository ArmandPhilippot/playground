import { useCallback, useEffect, useRef } from "react";

type OnClickOutsideHandler = (e: MouseEvent | FocusEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  callback: OnClickOutsideHandler
) {
  const ref = useRef<T | null>(null);

  const listener = useCallback(
    (ev: MouseEvent | FocusEvent) => {
      if (ref.current === null || ref.current.contains(ev.target as Node)) {
        return;
      }

      callback(ev);
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", listener, true);
    document.addEventListener("focusin", listener, true);

    return () => {
      document.removeEventListener("click", listener, true);
      document.removeEventListener("focusin", listener, true);
    };
  }, [listener]);

  return ref;
}
