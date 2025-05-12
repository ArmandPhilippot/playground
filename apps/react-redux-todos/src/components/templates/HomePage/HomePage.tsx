import { useOutletContext } from "react-router";
import type { PrivateOutletContext } from "../../../types/data";
import { UserTodos } from "../../organisms/UserTodos";

export function HomePage() {
  const { user } = useOutletContext<PrivateOutletContext>();

  return <UserTodos user={user} />;
}
