import type { ComponentProps, MouseEventHandler } from "react";
import type { Filter } from "../../../types/data";
import { Button } from "../../atoms/Button";
import classes from "./TodosFilters.module.scss";

function isValidFilter(value: unknown): value is Filter {
  const validFilters: string[] = [
    "all",
    "completed",
    "ongoing",
  ] satisfies Filter[];

  return typeof value === "string" && validFilters.includes(value);
}

type AvailableFilter = {
  kind: Filter;
  label: string;
};

export type onFilterChangeHandler = (filter: Filter) => void;

type TodosFiltersProps = ComponentProps<"div"> & {
  activeFilter: Filter;
  onFilterChange: onFilterChangeHandler;
};

export function TodosFilters({
  activeFilter,
  onFilterChange,
}: Readonly<TodosFiltersProps>) {
  const filters = [
    { label: "All", kind: "all" },
    { label: "Ongoing", kind: "ongoing" },
    { label: "Completed", kind: "completed" },
  ] satisfies AvailableFilter[];

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { filter } = e.currentTarget.dataset;

    if (isValidFilter(filter)) onFilterChange(filter);
  };

  return (
    <div className={classes["todos-filters"]}>
      Show:
      {filters.map((filter) => (
        <Button
          aria-pressed={activeFilter === filter.kind}
          data-filter={filter.kind}
          key={filter.kind}
          kind="filters"
          onClick={handleClick}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
