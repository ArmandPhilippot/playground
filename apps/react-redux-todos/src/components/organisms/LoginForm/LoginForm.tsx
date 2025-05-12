import { useState, type ComponentProps, type FormEventHandler } from "react";
import { useForm } from "../../../hooks/use-form";
import { Button } from "../../atoms/Button";
import { Fieldset } from "../../atoms/Fieldset";
import { Input } from "../../atoms/Input";
import { FormField } from "../../molecules/FormField";
import classes from "./LoginForm.module.scss";

type FormData = {
  email: string;
  password: string;
};

export type OnLoginHandler = (data: FormData) => string | null;

type LoginFormProps = Omit<
  ComponentProps<"form">,
  "action" | "method" | "onSubmit"
> & {
  onLogin: OnLoginHandler;
};

export function LoginForm({
  className = "",
  onLogin,
  ...props
}: Readonly<LoginFormProps>) {
  const { update, values } = useForm({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setErrorMsg(null);
    const loginError = onLogin(values);

    if (loginError !== null) setErrorMsg(loginError);
  };

  return (
    <form
      {...props}
      action="#"
      method="post"
      className={`${classes["login-form"]} ${className}`}
      onSubmit={handleSubmit}
    >
      {errorMsg === null ? null : (
        <p className={classes["login-error"]}>{errorMsg}</p>
      )}
      <Fieldset legend="Sign In">
        <FormField htmlFor="email" label="Email">
          <Input
            id="email"
            name="email"
            onChange={update}
            required
            type="email"
            value={values.email}
          />
        </FormField>
        <FormField htmlFor="password" label="Password">
          <Input
            id="password"
            name="password"
            onChange={update}
            required
            type="password"
            value={values.password}
          />
        </FormField>
        <Button className={classes["login-btn"]} type="submit">
          Log in
        </Button>
      </Fieldset>
    </form>
  );
}
