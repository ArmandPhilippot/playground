import type { ComponentProps } from "react";
import classes from "./Label.module.scss";

type LabelProps = Omit<ComponentProps<"label">, "htmlFor"> & {
  htmlFor: string;
};

export function Label({
  children,
  className = "",
  ...props
}: Readonly<LabelProps>) {
  return (
    <label {...props} className={`${classes.label} ${className}`}>
      {children}
    </label>
  );
}
