import type { ComponentProps, Ref } from "react";
import classes from "./Input.module.css";

type InputProps = ComponentProps<"input"> & {
  ref?: Ref<HTMLInputElement>;
};

export function Input({
  className = "",
  ref,
  type = "text",
  ...props
}: Readonly<InputProps>) {
  return (
    <input
      {...props}
      className={`${classes.input} ${className}`}
      ref={ref}
      type={type}
    />
  );
}
