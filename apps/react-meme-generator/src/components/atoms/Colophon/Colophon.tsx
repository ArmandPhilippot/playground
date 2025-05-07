import type { ComponentProps } from "react";

type ColophonProps = ComponentProps<"p"> & {
  copyrightOwner: string;
  copyrightYears: string;
  brand: string;
  license: string;
};

export function Colophon({
  brand,
  copyrightOwner,
  copyrightYears,
  license,
  ...props
}: Readonly<ColophonProps>) {
  return (
    <p {...props}>
      {brand}. {license} {copyrightYears}. {copyrightOwner}.
    </p>
  );
}
