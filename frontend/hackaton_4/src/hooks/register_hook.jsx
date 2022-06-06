import { useState } from "react";
import register from "../repository/register";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setShowError] = useState({
    show: false,
    title: "",
    body: "",
  });

  const nav = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register({
        username: e.target[0].value,
        password: e.target[1].value,
        email: e.target[2].value,
        first_name: e.target[3].value,
        last_name: e.target[4].value,
        dni: e.target[5].value,
        phone: e.target[6].value,
        address: e.target[7].value,
        gender: e.target[8].value,
        birth_date: e.target[9].value,
        type_user: e.target[10].value,
      });
      setIsLoading(false);
      nav("/login");
    } catch (error) {
      console.log(error.response);
      let data = JSON.stringify(error.response.data);
      setIsLoading(false);
      if (data.includes("A user with that username already exists.")) {
        setShowError({
          show: true,
          title: "Error",
          body: "Ya existe este usuario",
        });
      }
      setShowError({
        show: true,
        title: "Error",
        body: "Hubo un error.\nIntente de nuevo mas tarde",
      });
    }
  }

  return {
    isDoctor,
    setIsDoctor,
    isLoading,
    registerUser,
    error,
    setShowError,
  };
}
