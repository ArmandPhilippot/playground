import type { ComponentProps } from "react";
import classes from "./Button.module.scss";

type ButtonProps = ComponentProps<"button"> & {
  kind?: "action" | "delete" | "filters" | "neutral" | "user";
};

export function Button({
  children,
  className = "",
  kind = "neutral",
  type = "button",
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      className={`${classes.btn} ${className}`}
      data-kind={kind}
      type={type}
    >
      {children}
    </button>
  );
}
