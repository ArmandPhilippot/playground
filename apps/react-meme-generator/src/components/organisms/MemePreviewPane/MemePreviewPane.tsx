import type { ComponentProps } from "react";
import { Button } from "../../atoms/Button";
import { MemePreview } from "../../molecules/MemePreview";
import classes from "./MemePreviewPane.module.css";

type MemePreviewPaneProps = ComponentProps<"div"> &
  Pick<ComponentProps<typeof MemePreview>, "currentMeme" | "headlines"> & {
    onGetRandomMeme: () => void;
  };

export function MemePreviewPane({
  className = "",
  currentMeme,
  headlines,
  onGetRandomMeme,
  ...props
}: Readonly<MemePreviewPaneProps>) {
  return (
    <div {...props} className={`${classes["preview-pane"]} ${className}`}>
      <MemePreview currentMeme={currentMeme} headlines={headlines} />
      <Button
        className={classes["preview-pane-btn"]}
        kind="neutral"
        onClick={onGetRandomMeme}
      >
        Random image
      </Button>
    </div>
  );
}
