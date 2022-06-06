import React, { useEffect } from "react";
import { NavBarComponent } from "../components/navbar";
import useHome from "../hooks/home_hook";
import { Doctor } from "./Doctor";

export const Home = () => {
  const { nav, login } = useHome();

  useEffect(() => {
    if (!login.session.isLogged) {
      nav("/login");
    }
  }, []);

  function chooseView(type_user) {
    switch (type_user) {
      case 0:
        return <div className="container">Admin</div>;
      case 1:
        return <div className="container">Paciente</div>;
      case 2:
        return <Doctor />;
      default:
    }
  }

  return (
    <>
      <NavBarComponent />
      {chooseView(login.session.type_user)}
    </>
  );
};
