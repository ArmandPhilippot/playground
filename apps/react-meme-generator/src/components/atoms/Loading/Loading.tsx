import type { ComponentProps } from "react";
import classes from "./Loading.module.css";

type LoadingProps = Omit<ComponentProps<"div">, "children">;

export function Loading({ className = "", ...props }: Readonly<LoadingProps>) {
  return (
    <div {...props} className={`${classes.loading} ${className}`}>
      Loading...
    </div>
  );
}
