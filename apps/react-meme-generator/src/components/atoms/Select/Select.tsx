import type { ComponentProps } from "react";
import classes from "./Select.module.css";

type SelectOptionProps = ComponentProps<"option"> & {
  body: string;
};

function SelectOption({ value, body }: Readonly<SelectOptionProps>) {
  return <option value={value}>{body}</option>;
}

type SelectProps = ComponentProps<"select"> & {
  options: readonly string[];
};

export function Select({
  className = "",
  options,
  ...props
}: Readonly<SelectProps>) {
  return (
    <select {...props} className={`${classes.select} ${className}`}>
      {options.map((option) => {
        const optionValue = option.replace(" ", "-");

        return (
          <SelectOption key={optionValue} value={optionValue} body={option} />
        );
      })}
    </select>
  );
}
