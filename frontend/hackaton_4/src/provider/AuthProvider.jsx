import React from "react";

const sessionInfo = {
  isLogged: false,
  refresh: "",
  access: "",
  id: 1,
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  dni: "",
  address: "",
  phone: "",
  gender: null,
  birth_date: "",
  modication_date: "",
  register_date: "",
  register_user: null,
  num_tuition: null,
  type_user: 0,
};

const LoginContext = React.createContext(sessionInfo);

const { Provider, Consumer } = LoginContext;

const LoginProvider = ({ initialValueSession, children }) => {
  const [session, setSession] = React.useState(initialValueSession);
  const changeStateSession = (newSession) => {
    localStorage.setItem("sessionInfo", JSON.stringify(newSession));
    setSession((_) => newSession);
  };

  return (
    <Provider value={{ session, changeStateSession }}>{children}</Provider>
  );
};

export { LoginProvider, Consumer as LoginConsumer, LoginContext, sessionInfo };
