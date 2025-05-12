import type { ComponentProps } from "react";
import { Link } from "../../atoms/Link";
import { List } from "../../atoms/List";
import classes from "./UserNav.module.scss";

type UserNavItem = {
  id: string;
  label: string;
  route: string;
};

type UserNavProps = ComponentProps<"nav"> & {
  items: UserNavItem[];
};

export function UserNav({
  className = "",
  items,
  ...props
}: Readonly<UserNavProps>) {
  return (
    <nav {...props} className={`${classes["user-nav"]} ${className}`}>
      <List>
        {items.map((item) => (
          <li key={item.id}>
            <Link kind="nav" to={item.route}>
              {item.label}
            </Link>
          </li>
        ))}
      </List>
    </nav>
  );
}
