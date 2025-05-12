import {
  useCallback,
  type ChangeEventHandler,
  type ComponentProps,
  type FormEventHandler,
} from "react";
import { useForm } from "../../../hooks/use-form";
import { useToggle } from "../../../hooks/use-toggle";
import type { Todo } from "../../../types/data";
import { Input } from "../../atoms/Input";
import { TextArea } from "../../atoms/TextArea";
import classes from "./SingleTodo.module.scss";

type TodoField = "title" | "body";

export type OnEditionHandler = (todo: Todo) => void;

function isValidId(id: string): id is TodoField {
  return ["title", "body"].includes(id);
}

type SingleTodoProps = Omit<
  ComponentProps<"form">,
  "action" | "method" | "onSubmit"
> & {
  onEdition: OnEditionHandler;
  todo: Todo;
};

export function SingleTodo({
  className = "",
  onEdition,
  todo,
  ...props
}: Readonly<SingleTodoProps>) {
  const { update, values } = useForm<Record<TodoField, string>>({
    title: todo.title,
    body: todo.body,
  });
  const [isTitleEditable, toggleTitleEdition] = useToggle(false);
  const [isBodyEditable, toggleBodyEdition] = useToggle(false);

  const handleEdition: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(
    (e) => {
      if (!isValidId(e.target.id)) return;
      update(e);
      onEdition({ ...todo, [e.target.id]: e.target.value });
    },
    [onEdition, todo, update]
  );

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      {...props}
      action="#"
      className={`${classes["single-todo"]} ${className}`}
      method="post"
      onSubmit={handleSubmit}
    >
      {Object.entries(values).map(([key, value]) => {
        if (key === "title") {
          return (
            <Input
              className={classes["single-todo-field"]}
              key={key}
              id={key}
              name={key}
              onBlur={toggleTitleEdition}
              onChange={handleEdition}
              onFocus={toggleTitleEdition}
              readOnly={!isTitleEditable}
              value={value}
            />
          );
        }

        return (
          <TextArea
            className={classes["single-todo-field"]}
            key={key}
            id={key}
            name={key}
            onBlur={toggleBodyEdition}
            onChange={handleEdition}
            onFocus={toggleBodyEdition}
            readOnly={!isBodyEditable}
            value={value}
          />
        );
      })}
    </form>
  );
}
