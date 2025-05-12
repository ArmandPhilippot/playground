import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export function Input({
  className = "",
  type = "text",
  ...props
}: Readonly<InputProps>) {
  return (
    <input {...props} className={`form__field ${className}`} type={type} />
  );
}
