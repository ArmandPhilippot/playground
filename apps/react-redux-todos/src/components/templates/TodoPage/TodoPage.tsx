import { useCallback } from "react";
import { Navigate, useLocation } from "react-router";
import { useTodoById } from "../../../hooks/use-todo-by-id";
import { updateTodo, useAppDispatch } from "../../../store";
import { isKeyExistIn, isObject, isString } from "../../../utils/helpers";
import { Link } from "../../atoms/Link";
import { SingleTodo, type OnEditionHandler } from "../../organisms/SingleTodo";

function getTodoId(state: unknown) {
  if (
    isObject(state) &&
    isKeyExistIn(state, "todoId") &&
    isString(state.todoId)
  ) {
    return state.todoId;
  }

  return null;
}

export function TodoPage() {
  const { state } = useLocation();
  const todoId = getTodoId(state);
  const currentTodo = useTodoById(todoId);
  const dispatch = useAppDispatch();

  const handleEdition: OnEditionHandler = useCallback(
    (updatedTodo) => {
      dispatch(updateTodo(updatedTodo));
    },
    [dispatch]
  );

  return currentTodo === undefined ? (
    <Navigate to="/404" replace />
  ) : (
    <div>
      <Link to="/">Back to your ToDos list</Link>
      <SingleTodo onEdition={handleEdition} todo={currentTodo} />
    </div>
  );
}
