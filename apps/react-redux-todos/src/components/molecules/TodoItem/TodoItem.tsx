import type {
  ChangeEventHandler,
  ComponentProps,
  MouseEventHandler,
} from "react";
import { useForm } from "../../../hooks/use-form";
import type { Todo } from "../../../types/data";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Link } from "../../atoms/Link";
import { FormField } from "../FormField";
import classes from "./TodoItem.module.scss";

export type OnDeleteHandler = (id: string) => void;
export type OnDoneHandler = (id: string) => void;

type TodoItemProps = ComponentProps<"li"> & {
  onDelete: OnDeleteHandler;
  onDone: OnDoneHandler;
  todo: Todo;
};

export function TodoItem({
  className = "",
  onDelete,
  onDone,
  todo,
  ...props
}: Readonly<TodoItemProps>) {
  const { done, id, createdAt, slug, title } = todo;
  const { update, values } = useForm({ done });

  const handleTodoDone: ChangeEventHandler<HTMLInputElement> = (e) => {
    update(e);
    onDone(id);
  };

  const handleDeletion: MouseEventHandler = () => {
    onDelete(id);
  };

  return (
    <li
      {...props}
      className={`${classes["todo-item"]} ${className}`}
      data-done={values.done}
    >
      <span>{new Date(createdAt).toLocaleDateString()}</span>
      <span className={classes["todo-title"]}>
        <Link to={`/todo/${slug}`} state={{ todoId: id }}>
          {title}
        </Link>
      </span>
      <FormField htmlFor={id} isInline label="Done?">
        <Input
          id={id}
          name="done"
          onChange={handleTodoDone}
          type="checkbox"
          checked={values.done}
        />
      </FormField>
      <Button kind="delete" onClick={handleDeletion}>
        Delete
      </Button>
    </li>
  );
}
