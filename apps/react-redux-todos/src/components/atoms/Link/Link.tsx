import type { ComponentProps } from "react";
import { Link as RouterLink } from "react-router";
import classes from "./Link.module.scss";

type LinkProps = ComponentProps<typeof RouterLink> & {
  kind?: "nav" | "regular";
};

export function Link({
  children,
  className = "",
  kind = "regular",
  ...props
}: Readonly<LinkProps>) {
  return (
    <RouterLink
      {...props}
      className={`${classes.link} ${className}`}
      data-kind={kind}
    >
      {children}
    </RouterLink>
  );
}
