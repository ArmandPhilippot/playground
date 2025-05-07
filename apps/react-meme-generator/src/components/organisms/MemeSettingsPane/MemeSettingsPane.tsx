import type { ComponentProps, MouseEventHandler } from "react";
import type { HeadlineWithId } from "../../../types/data";
import { Button } from "../../atoms/Button";
import { MemeSettings } from "../../molecules/MemeSettings";
import classes from "./MemeSettingsPane.module.css";

type MemeSettingsPaneProps = ComponentProps<"div"> &
  Pick<
    ComponentProps<typeof MemeSettings>,
    "headlines" | "onDeleteHeading" | "onSettingChange"
  > & {
    headlines: HeadlineWithId[];
    maxHeadlines: number;
    onNewHeadline: () => void;
  };

export function MemeSettingsPane({
  className = "",
  headlines,
  maxHeadlines,
  onDeleteHeading,
  onNewHeadline,
  onSettingChange,
}: Readonly<MemeSettingsPaneProps>) {
  const handleAddHeadline: MouseEventHandler = () => {
    onNewHeadline();
  };

  return (
    <div className={`${classes["settings-pane"]} ${className}`}>
      <MemeSettings
        headlines={headlines}
        onDeleteHeading={onDeleteHeading}
        onSettingChange={onSettingChange}
      />
      {headlines.length < maxHeadlines ? (
        <Button
          className={classes["settings-pane-btn"]}
          kind="add"
          onClick={handleAddHeadline}
        >
          Add new text
        </Button>
      ) : null}
    </div>
  );
}
