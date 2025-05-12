import { useOutletContext } from "react-router";
import type { PrivateOutletContext } from "../../../types/data";
import { UserAccount } from "../../organisms/UserAccount";

export function AccountPage() {
  const { user } = useOutletContext<PrivateOutletContext>();

  return <UserAccount user={user} />;
}
