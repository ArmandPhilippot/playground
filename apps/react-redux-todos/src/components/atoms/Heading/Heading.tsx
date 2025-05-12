import type { ComponentProps, PropsWithChildren } from "react";

type HeadingEl = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps<T extends HeadingEl> = PropsWithChildren<
  ComponentProps<T>
> & {
  as?: T;
};

export function Heading<T extends HeadingEl>({
  as: Component = "h2",
  children,
  ...props
}: Readonly<HeadingProps<T>>) {
  return <Component {...props}>{children}</Component>;
}
