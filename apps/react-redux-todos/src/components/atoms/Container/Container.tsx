import type { ComponentProps } from "react";
import classes from "./Container.module.scss";

type ContainerProps = ComponentProps<"div">;

export function Container({
  className = "",
  children,
  ...props
}: Readonly<ContainerProps>) {
  return (
    <div {...props} className={`${classes.container} ${className}`}>
      {children}
    </div>
  );
}
