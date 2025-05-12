import type { ComponentProps, ReactNode } from "react";
import classes from "./Fieldset.module.scss";

type FieldsetProps = ComponentProps<"fieldset"> & {
  legend: ReactNode;
};

export function Fieldset({
  children,
  className = "",
  legend,
  ...props
}: Readonly<FieldsetProps>) {
  return (
    <fieldset {...props} className={`${classes.fieldset} ${className}`}>
      <legend className={classes.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}
