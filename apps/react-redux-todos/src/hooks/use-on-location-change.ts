import { useEffect } from "react";
import { useLocation } from "react-router";

type OnLocationChangeHandler = () => void;

export function useOnLocationChange(callback: OnLocationChangeHandler) {
  const routerLocation = useLocation();

  useEffect(() => {
    callback();
  }, [callback, routerLocation.pathname]);
}
