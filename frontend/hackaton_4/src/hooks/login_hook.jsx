import { useState, useContext } from "react";
import { LoginContext } from "../provider/AuthProvider";
import requestUserDetails from "../repository/user_details";
import requestLogin from "../repository/login";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const loginContext = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setShowError] = useState({
    show: false,
    title: "",
    body: "",
  });

  const nav = useNavigate();

  async function loggin(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      let response = await requestLogin({
        username: e.target[0].value,
        password: e.target[1].value,
      });
      try {
        let userDetails = await requestUserDetails();
        loginContext.changeStateSession({
          isLogged: true,
          ...response.data,
          ...userDetails.data,
        });
        nav("/home");
        setIsLoading(false);
      } catch (error) {
        setShowError({
          show: true,
          title: "Error",
          body: "Error al obtener los datos del usuario",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setShowError({
        show: true,
        title: "Error",
        body: "Usuario o contraseña incorrectos",
      });
    }
  }
  return {
    loginContext,
    isLoading,
    loggin,
    error,
    setShowError,
  };
}
