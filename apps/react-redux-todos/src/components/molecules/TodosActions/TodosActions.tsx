import type { ComponentProps, MouseEventHandler } from "react";
import { Button } from "../../atoms/Button";
import classes from "./TodosActions.module.scss";

type TodosAction = {
  handler: MouseEventHandler;
  id: string;
  kind: ComponentProps<typeof Button>["kind"];
  label: string;
};

type TodosActionsProps = ComponentProps<"div"> & {
  onNewTodo: MouseEventHandler;
  onDeleteAll: MouseEventHandler;
};

export function TodosActions({
  className = "",
  onDeleteAll,
  onNewTodo,
  ...props
}: Readonly<TodosActionsProps>) {
  const actions = [
    { id: "new-todo", kind: "action", handler: onNewTodo, label: "New todo" },
    {
      id: "delete-all",
      kind: "delete",
      handler: onDeleteAll,
      label: "Delete all",
    },
  ] satisfies TodosAction[];

  return (
    <div {...props} className={`${classes["todos-actions"]} ${className}`}>
      {actions.map((action) => (
        <Button key={action.id} kind={action.kind} onClick={action.handler}>
          {action.label}
        </Button>
      ))}
    </div>
  );
}
