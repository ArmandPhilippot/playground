import type { ComponentProps } from "react";

type FieldsetProps = ComponentProps<"fieldset"> & {
  legend?: string | undefined;
};

function Fieldset({ children, legend = "Legend" }: FieldsetProps) {
  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend">{legend}</legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
