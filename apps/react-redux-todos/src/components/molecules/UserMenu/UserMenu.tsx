import type { ComponentProps } from "react";
import { Button } from "../../atoms/Button";
import { UserNav } from "../UserNav";
import classes from "./UserMenu.module.scss";

type UserMenuProps = Omit<ComponentProps<"div">, "children"> &
  Pick<ComponentProps<typeof UserNav>, "items"> & {
    isExpanded: boolean;
    toggle: () => void;
    username: string;
  };

export function UserMenu({
  className = "",
  isExpanded,
  items,
  toggle,
  username,
  ...props
}: Readonly<UserMenuProps>) {
  return (
    <div {...props} className={`${classes["user-menu"]} ${className}`}>
      <Button kind="user" onClick={toggle}>
        {username}
      </Button>
      {isExpanded ? (
        <UserNav className={classes["user-nav"]} items={items} />
      ) : null}
    </div>
  );
}
