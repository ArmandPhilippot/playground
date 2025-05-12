import { createElement, type ComponentProps } from "react";
import classes from "./List.module.scss";

type ListProps<O extends boolean> = (O extends true
  ? ComponentProps<"ol">
  : ComponentProps<"ul">) & {
  isOrdered?: O;
};

export function List<O extends boolean = false>({
  children,
  className = "",
  isOrdered = false,
  ...props
}: Readonly<ListProps<O>>) {
  const Tag = isOrdered ? "ol" : "ul";

  return createElement(Tag, {
    ...props,
    className: `${classes.list} ${className}`,
    children,
  });
}
