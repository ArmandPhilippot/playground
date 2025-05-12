import { useState, type ComponentProps } from "react";
import { List } from "../../atoms/List";
import { TodoItem } from "../TodoItem";
import type { Filter, Todo } from "../../../types/data";
import { TodosFilters } from "../TodosFilters";
import classes from "./TodosList.module.scss";

function getFilteredTodos(list: Todo[], filter: Filter) {
  if (filter === "completed") return list.filter((todo) => todo.done);
  if (filter === "ongoing") return list.filter((todo) => !todo.done);
  return list;
}

type TodosListProps = ComponentProps<"div"> &
  Pick<ComponentProps<typeof TodoItem>, "onDelete" | "onDone"> & {
    todos: Todo[];
  };

export function TodosList({
  onDelete,
  onDone,
  todos,
  ...props
}: Readonly<TodosListProps>) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const filteredTodos = getFilteredTodos(todos, activeFilter);

  return (
    <div {...props}>
      <TodosFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      {filteredTodos.length > 0 ? (
        <List className={classes["todos-list"]}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              onDelete={onDelete}
              onDone={onDone}
              todo={todo}
            />
          ))}
        </List>
      ) : (
        <p>No ToDos found.</p>
      )}
    </div>
  );
}
