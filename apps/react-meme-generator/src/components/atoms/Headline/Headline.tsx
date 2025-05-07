import type { ComponentProps } from "react";
import classes from "./Headline.module.css";

type HeadlineProps = Omit<ComponentProps<"p">, "children"> & {
  text: string;
};

export function Headline({
  className = "",
  text,
  ...props
}: Readonly<HeadlineProps>) {
  return (
    <p {...props} className={`${classes.headline} ${className}`}>
      {text}
    </p>
  );
}
