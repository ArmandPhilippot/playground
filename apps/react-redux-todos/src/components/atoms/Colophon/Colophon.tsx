import type { ComponentProps } from "react";
import classes from "./Colophon.module.scss";

type ColophonProps = ComponentProps<"p"> & {
  copyrightOwner: string;
  copyrightYears: string;
  brand: string;
  license: string;
};

export function Colophon({
  brand,
  className = "",
  copyrightOwner,
  copyrightYears,
  license,
  ...props
}: Readonly<ColophonProps>) {
  return (
    <p {...props} className={`${classes.colophon} ${className}`}>
      {brand}. {license} {copyrightYears}. {copyrightOwner}.
    </p>
  );
}
