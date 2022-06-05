import React, { useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/login_hook";

import { Button, Spinner } from "react-bootstrap";
import InfoDialog from "../components/info_dialog";

export const LoginPage = () => {
  const { loginContext, isLoading, loggin, error, setShowError } = useLogin();
  const nav = useNavigate();

  useEffect(() => {
    if (loginContext.session.isLogged) {
      nav("/home");
    }
  });

  return (
    <>
      <div className="login_page">
        <div className="login_page_container">
          <div className="login_page_header">Login</div>
          <div className="login_page_body">
            <div className="login_body_container">
              <form action="" onSubmit={loggin}>
                <input type="text" placeholder="Username" className="my-2" />
                <input type="password" placeholder="Password" />
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-m"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    <p>Login</p>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <InfoDialog
        show={error.show}
        onClose={() => setShowError({ show: false, title: "", body: "" })}
        title={error.title}
        body={error.body}
      />
    </>
  );
};
