import {
  forwardRef,
  type ChangeEventHandler,
  type ComponentProps,
  type FocusEventHandler,
  type Ref,
} from "react";

type InputProps = ComponentProps<"input"> & {
  additionalClasses?: string;
  label?: string;
  onBlurHandler?: FocusEventHandler<HTMLInputElement> | undefined;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement> | undefined;
};

function Input(
  {
    label,
    id,
    name,
    type = "text",
    value,
    onChangeHandler,
    onBlurHandler,
    additionalClasses = "",
  }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const classNames = `form__input ${additionalClasses}`;

  return (
    <>
      {label ? (
        <label className="form__label" htmlFor={id}>
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        id={id}
        name={name}
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={classNames}
      />
    </>
  );
}

export default forwardRef(Input);
