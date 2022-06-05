import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../provider/AuthProvider";

export const Home = () => {
  const nav = useNavigate();
  const login = useContext(LoginContext);
  useEffect(() => {
    if (!login.session.isLogged) {
      nav("/login");
    }
  });
  return <div>Home</div>;
};
