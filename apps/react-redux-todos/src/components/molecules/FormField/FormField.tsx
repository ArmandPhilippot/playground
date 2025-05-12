import type { ComponentProps } from "react";
import { Label } from "../../atoms/Label";
import classes from "./FormField.module.scss";

type FormFieldsProps = ComponentProps<"div"> &
  Pick<ComponentProps<typeof Label>, "htmlFor"> & {
    isInline?: boolean;
    label: string;
  };

export function FormField({
  children,
  className = "",
  htmlFor,
  isInline = false,
  label,
  ...props
}: Readonly<FormFieldsProps>) {
  return (
    <div
      {...props}
      className={`${classes["form-field"]} ${className}`}
      data-inline={isInline}
    >
      <Label className={classes["form-field-label"]} htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
    </div>
  );
}
