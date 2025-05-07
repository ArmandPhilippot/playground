import type { ComponentProps } from "react";
import classes from "./Label.module.css";

type LabelProps = ComponentProps<"label"> & {
  htmlFor: string;
};

export function Label({
  children,
  className = "",
  htmlFor,
  ...props
}: Readonly<LabelProps>) {
  return (
    <label
      {...props}
      className={`${classes.label} ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
