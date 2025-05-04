import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  body: string;
  modifier: string;
};

function Button({ body, modifier, onClick }: ButtonProps) {
  const classNames = `btn ${modifier ? `btn--${modifier}` : ""}`;

  return (
    <button className={classNames} onClick={onClick}>
      {body}
    </button>
  );
}

export default Button;
