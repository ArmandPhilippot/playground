import type { ComponentProps } from "react";
import classes from "./Fieldset.module.css";

type FieldsetProps = ComponentProps<"fieldset"> & {
  legend?: string | undefined;
};

export function Fieldset({
  children,
  className = "",
  legend = "Legend",
  ...props
}: Readonly<FieldsetProps>) {
  return (
    <fieldset {...props} className={`${classes.fieldset} ${className}`}>
      <legend className={classes.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}
