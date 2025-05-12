import type { ComponentProps } from "react";
import classes from "./TextArea.module.scss";

type TextAreaProps = ComponentProps<"textarea">;

export function TextArea({
  className = "",
  ...props
}: Readonly<TextAreaProps>) {
  return <textarea {...props} className={`${classes.textarea} ${className}`} />;
}
