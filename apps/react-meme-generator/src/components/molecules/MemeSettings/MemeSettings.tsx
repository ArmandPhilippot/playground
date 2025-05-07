import type {
  ComponentProps,
  FormEventHandler,
  MouseEventHandler,
} from "react";
import type { HeadlineWithId } from "../../../types/data";
import { Button } from "../../atoms/Button";
import { Form } from "../../atoms/Form";
import {
  HeadlineSettings,
  type ChangeHeadingSettingHandler,
} from "../HeadlineSettings/HeadlineSettings";
import classes from "./MemeSettings.module.css";

export type DeleteHeadlineHandler = (id: string) => void;

type MemeSettingsProps = Omit<ComponentProps<"form">, "onSubmit"> & {
  headlines: HeadlineWithId[];
  onDeleteHeading: DeleteHeadlineHandler;
  onSettingChange: ChangeHeadingSettingHandler;
};

export function MemeSettings({
  className = "",
  children,
  headlines,
  onDeleteHeading,
  onSettingChange,
  ...props
}: Readonly<MemeSettingsProps>) {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handleDeleteHeadline =
    (id: string): MouseEventHandler<HTMLButtonElement> =>
    () => {
      onDeleteHeading(id);
    };

  return (
    <Form
      {...props}
      className={`${classes.settings} ${className}`}
      onSubmit={handleSubmit}
    >
      {headlines.map((headline) => (
        <HeadlineSettings
          {...headline}
          className={classes["settings-group"]}
          key={headline.id}
          legend="Text settings"
          onSettingChange={onSettingChange}
        >
          <Button
            aria-label="Delete headline"
            className={classes["settings-btn"]}
            kind="delete"
            onClick={handleDeleteHeadline(headline.id)}
          >
            Delete
          </Button>
        </HeadlineSettings>
      ))}
    </Form>
  );
}
