import { LoginContext, sessionInfo } from "../provider/AuthProvider";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../repository/logout";
import repository from "../repository/base_repository";

export default function useHome() {
  const nav = useNavigate();
  const login = useContext(LoginContext);

  useEffect(() => {
    repository.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${login.session.access}`;
  }, []);

  function closeSession() {
    login.changeStateSession(sessionInfo);
    localStorage.setItem("sessionInfo", JSON.stringify(sessionInfo));
    logout();
    nav("/login");
  }

  return { nav, closeSession, login };
}
