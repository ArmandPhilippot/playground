import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../../hooks/use-auth";
import { Container } from "../../atoms/Container";

export function PrivateOutlet() {
  const { currentUser, isAuthenticated } = useAuth();
  const routerLocation = useLocation();

  if (!isAuthenticated || currentUser === null) {
    return <Navigate to="/login" state={{ from: routerLocation }} replace />;
  }

  return (
    <Container>
      <Outlet context={{ user: currentUser }} />
    </Container>
  );
}
