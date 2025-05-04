import type { ComponentProps, CSSProperties, FormEventHandler } from "react";

type FormProps = ComponentProps<"form"> & {
  onSubmitHandler: FormEventHandler<HTMLFormElement>;
  styles?: CSSProperties | undefined;
};

function Form({
  children,
  action = "#",
  method = "post",
  styles,
  onSubmitHandler,
}: FormProps) {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmitHandler}
      className="form"
      style={styles}
    >
      {children}
    </form>
  );
}

export default Form;
