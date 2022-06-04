import { useState, useContext } from "react";

import { LoginContext } from "../provider/AuthProvider";

import requestLogin from "../repository/login";

export default function useLogin() {
  const loginContext = useContext(LoginContext);

  async function loggin(e) {
    e.preventDefault();
    let response = await requestLogin({
      username: e.target[0].value,
      password: e.target[1].value,
    });

    if (response.status === 200) {
      loginContext.changeStateSession({ isLogged: true, ...response.data });
    }
    console.log(response.status);
    console.log(response.data);
  }

  return {
    loggin,
  };
}
