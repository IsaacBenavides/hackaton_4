import React, { useEffect } from "react";
import { NavBarComponent } from "../components/navbar";
import useHome from "../hooks/home_hook";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

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
        return <Patient />;
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
