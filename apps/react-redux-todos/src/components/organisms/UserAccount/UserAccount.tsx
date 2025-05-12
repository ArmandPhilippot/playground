import type { ComponentProps } from "react";
import type { User } from "../../../types/data";
import { Link } from "../../atoms/Link";
import classes from "./UserAccount.module.scss";

type UserAccountProps = ComponentProps<"div"> & {
  user: User;
};

export function UserAccount({
  className = "",
  user,
  ...props
}: Readonly<UserAccountProps>) {
  return (
    <div {...props} className={className}>
      <Link to="/">Back to your todo list</Link>
      <h2>Account</h2>
      <dl className={classes["account-details"]}>
        <dt className={classes["account-details-label"]}>Username</dt>
        <dd className={classes["account-details-data"]}>{user.username}</dd>
        <dt className={classes["account-details-label"]}>Email</dt>
        <dd className={classes["account-details-data"]}>{user.email}</dd>
        <dt className={classes["account-details-label"]}>Creation date</dt>
        <dd className={classes["account-details-data"]}>
          {new Date(user.createdAt).toLocaleDateString()}
        </dd>
      </dl>
    </div>
  );
}
