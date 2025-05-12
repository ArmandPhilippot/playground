import type { ComponentProps, FormEventHandler } from "react";
import { useForm } from "../../../hooks/use-form";
import { Button } from "../../atoms/Button";
import { Fieldset } from "../../atoms/Fieldset";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../atoms/TextArea";
import { FormField } from "../../molecules/FormField";

type FormData = {
  body: string;
  title: string;
};

export type OnSaveHandler = (data: FormData) => void;

type TodoFormProps = ComponentProps<"form"> & {
  onSave: OnSaveHandler;
};

export function TodoForm({
  className = "",
  onSave,
  ...props
}: Readonly<TodoFormProps>) {
  const { update, values } = useForm({
    body: "",
    title: "",
  });

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onSave(values);
  };

  return (
    <form {...props} className={className} onSubmit={handleSubmit}>
      <Fieldset legend="Add a new todo">
        <FormField htmlFor="todo-title" label="Title">
          <Input
            id="todo-title"
            name="title"
            onChange={update}
            value={values.title}
          />
        </FormField>
        <FormField htmlFor="todo-details" label="Details">
          <TextArea
            id="todo-details"
            name="body"
            onChange={update}
            value={values.body}
          />
        </FormField>
        <Button type="submit">Save</Button>
      </Fieldset>
    </form>
  );
}
