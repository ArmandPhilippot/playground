import type { ComponentProps } from "react";

type OptionProps = ComponentProps<"option"> & {
  body: string;
};

function Option({ value, body }: OptionProps) {
  return <option value={value}>{body}</option>;
}

export default Option;
