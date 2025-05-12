import { useEffect } from "react";
import { useNavigate } from "react-router";
import { logout, useAppDispatch } from "../../../store";

export function LogoutPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    void navigate("/");
  });

  return <>Logging out...</>;
}
