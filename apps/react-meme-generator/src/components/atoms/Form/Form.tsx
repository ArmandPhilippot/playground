import type { ComponentProps } from "react";

type FormProps = ComponentProps<"form">;

export function Form({
  children,
  className = "",
  method = "post",
  ...props
}: Readonly<FormProps>) {
  return (
    <form {...props} className={`form ${className}`} method={method}>
      {children}
    </form>
  );
}
