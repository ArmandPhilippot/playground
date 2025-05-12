import { useNavigate } from "react-router";
import { useUsers } from "../../../hooks/use-users";
import { login, useAppDispatch } from "../../../store";
import {
  LoginForm,
  type OnLoginHandler,
} from "../../organisms/LoginForm/LoginForm";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const usersList = useUsers();

  const handleLogin: OnLoginHandler = (data) => {
    const matchingUser = usersList.find((user) => user.email === data.email);

    if (matchingUser === undefined) {
      return "This email address does not exist.";
    }

    const isValidPassword = matchingUser.password === data.password;

    if (!isValidPassword) {
      return "The password does not match.";
    }

    dispatch(login(matchingUser));
    void navigate("/");
    return null;
  };

  return <LoginForm onLogin={handleLogin} />;
}
