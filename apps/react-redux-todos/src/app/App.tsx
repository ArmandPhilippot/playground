import type { ComponentProps } from "react";
import { Route, Routes } from "react-router";
import { Colophon } from "../components/atoms/Colophon";
import { Container } from "../components/atoms/Container";
import { Heading } from "../components/atoms/Heading";
import { UserMenu } from "../components/molecules/UserMenu";
import { AccountPage } from "../components/templates/AccountPage";
import { ErrorPage } from "../components/templates/ErrorPage";
import { HomePage } from "../components/templates/HomePage";
import { LoginPage } from "../components/templates/LoginPage";
import { LogoutPage } from "../components/templates/LogoutPage";
import { TodoPage } from "../components/templates/TodoPage";
import { PrivateOutlet } from "../components/utilities/PrivateOutlet";
import { useAuth } from "../hooks/use-auth";
import { useBoolean } from "../hooks/use-boolean";
import { useOnClickOutside } from "../hooks/use-on-click-outside";
import { useOnLocationChange } from "../hooks/use-on-location-change";
import { CONFIG } from "../utils/constants";
import classes from "./App.module.scss";

export function App() {
  const { currentUser } = useAuth();
  const {
    state: shouldDisplayUserMenu,
    deactivate: hideUserMenu,
    toggle: toggleUserMenu,
  } = useBoolean(false);
  const headerRef = useOnClickOutside(hideUserMenu);

  useOnLocationChange(hideUserMenu);

  const navItems: ComponentProps<typeof UserMenu>["items"] = [
    { id: "account", label: "Account", route: "/account" },
    { id: "logout", label: "Logout", route: "/logout" },
  ];

  return (
    <>
      <header className={classes.header} ref={headerRef}>
        <Container className={classes["header-container"]}>
          <Heading as="h1" className={classes["header-branding"]}>
            {CONFIG.BRAND}
          </Heading>
          {currentUser === null ? null : (
            <UserMenu
              isExpanded={shouldDisplayUserMenu}
              items={navItems}
              toggle={toggleUserMenu}
              username={currentUser.username}
            />
          )}
        </Container>
      </header>
      <main className={`container ${classes.main}`}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/" element={<PrivateOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="todo/:string" element={<TodoPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </main>
      <footer className={classes.footer}>
        <Container>
          <Colophon
            brand={CONFIG.BRAND}
            copyrightOwner={CONFIG.AUTHOR}
            copyrightYears={CONFIG.COPYRIGHT_YEARS}
            license={CONFIG.LICENSE}
          />
        </Container>
      </footer>
    </>
  );
}
