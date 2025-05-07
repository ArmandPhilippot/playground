import type { ChangeEventHandler, ComponentProps } from "react";
import type { Headline, HeadlineWithId } from "../../../types/data";
import { HEADLINE_POS_X, HEADLINE_POS_Y } from "../../../utils/constants";
import { Fieldset } from "../../atoms/Fieldset";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";
import { Select } from "../../atoms/Select";
import classes from "./HeadlineSettings.module.css";

export type ChangeHeadingSettingHandler = (
  id: string,
  updatedHeadline: Headline
) => void;

type HeadingSettingsProps = HeadlineWithId &
  Omit<ComponentProps<typeof Fieldset>, "id"> & {
    onSettingChange: ChangeHeadingSettingHandler;
  };

export function HeadlineSettings({
  children,
  fontSize,
  id,
  onSettingChange,
  posX,
  posY,
  text,
  ...props
}: Readonly<HeadingSettingsProps>) {
  const handleSettingChange =
    (
      key: keyof Headline
    ): ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =>
    (e) => {
      const fieldset = e.target.closest("fieldset");
      const headlineId = fieldset?.id;

      if (headlineId === undefined) {
        throw new Error("Cannot find the parent fieldset.");
      }

      const value =
        key === "fontSize" ? Number(e.target.value) : e.target.value;

      onSettingChange(headlineId, {
        fontSize,
        posX,
        posY,
        text,
        [key]: value,
      });
    };

  return (
    <Fieldset {...props} id={id}>
      <div className={classes.item}>
        <Label htmlFor={`${id}-text`}>Text:</Label>
        <Input
          id={`${id}-text`}
          onChange={handleSettingChange("text")}
          value={text}
        />
      </div>
      <div className={classes.item}>
        <Label htmlFor={`${id}-font-size`}>Font-size:</Label>
        <Input
          id={`${id}-font-size`}
          min={5}
          max={100}
          onChange={handleSettingChange("fontSize")}
          title={`${fontSize}%`}
          type="range"
          value={`${fontSize}`}
        />
      </div>
      <div className={classes.item}>
        <Label htmlFor={`${id}-pos-y`}>Vertical position:</Label>
        <Select
          id={`${id}-pos-y`}
          name="selectY"
          options={HEADLINE_POS_Y}
          value={posY}
          onChange={handleSettingChange("posY")}
        />
      </div>
      <div className={classes.item}>
        <Label htmlFor={`${id}-pos-x`}>Horizontal position:</Label>
        <Select
          id={`${id}-pos-x`}
          name="selectX"
          options={HEADLINE_POS_X}
          value={posX}
          onChange={handleSettingChange("posX")}
        />
      </div>
      {children}
    </Fieldset>
  );
}
