import type { ComponentProps, MouseEventHandler } from "react";
import { useBoolean } from "../../../hooks/use-boolean";
import { useTodos } from "../../../hooks/use-todos";
import {
  addTodo,
  deleteAllTodos,
  deleteTodo,
  toggleTodo,
  useAppDispatch,
} from "../../../store";
import type { User } from "../../../types/data";
import type { OnDeleteHandler, OnDoneHandler } from "../../molecules/TodoItem";
import { TodosActions } from "../../molecules/TodosActions";
import { TodosList } from "../../molecules/TodosList";
import { TodoForm, type OnSaveHandler } from "../TodoForm";
import classes from "./UserTodos.module.scss";

type UserTodosProps = ComponentProps<"div"> & {
  user: User;
};

export function UserTodos({ user, ...props }: Readonly<UserTodosProps>) {
  const todos = useTodos(user.id);
  const dispatch = useAppDispatch();
  const {
    deactivate: hideForm,
    toggle: toggleForm,
    state: shouldDisplayForm,
  } = useBoolean(false);

  const handleDelete: OnDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteAll: MouseEventHandler = () => {
    dispatch(deleteAllTodos());
  };

  const handleDone: OnDoneHandler = (id) => dispatch(toggleTodo(id));

  const handleNewTodo: MouseEventHandler = () => {
    toggleForm();
  };

  const handleSave: OnSaveHandler = (data) => {
    if (!data.title) return;

    dispatch(
      addTodo({
        userId: user.id,
        title: data.title,
        body: data.body,
      })
    );
    hideForm();
  };

  return (
    <div {...props}>
      <h2>Welcome back, {user.username}!</h2>
      <TodosActions onDeleteAll={handleDeleteAll} onNewTodo={handleNewTodo} />
      {shouldDisplayForm ? (
        <TodoForm className={classes["user-todos-form"]} onSave={handleSave} />
      ) : null}
      <TodosList onDelete={handleDelete} onDone={handleDone} todos={todos} />
    </div>
  );
}
