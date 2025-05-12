/// <reference types="vite/client" />

declare module "csstype" {
  interface Properties {
    [index: `--${string}`]: string | number;
  }
}
