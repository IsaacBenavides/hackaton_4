import React from "react";

const sessionInfo = {
  isLogged: false,
  refresh: "",
  access: "",
};

const LoginContext = React.createContext(sessionInfo);

const { Provider, Consumer } = LoginContext;

const LoginProvider = ({ initialValueSession, children }) => {
  const [session, setSession] = React.useState(initialValueSession);
  const changeStateSession = (newSession) => {
    setSession(newSession);
  };

  return (
    <Provider value={{ session, changeStateSession }}>{children}</Provider>
  );
};

export { LoginProvider, Consumer as LoginConsumer, LoginContext, sessionInfo };
