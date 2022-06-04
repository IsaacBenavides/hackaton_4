import React, { useState } from "react";
import "../styles/login.css";
import useLogin from "../hooks/login_hook";

import { Button } from "react-bootstrap";

export const LoginPage = () => {
  const { setData, loggin } = useLogin();

  return (
    <div className="login_page">
      <div className="login_page_container">
        <div className="login_page_header">Login</div>
        <div className="login_page_body">
          <div className="login_body_container">
            <form action="" onSubmit={loggin}>
              <div>
                <input type="text" placeholder="Username" />
              </div>
              <br />
              <div>
                <input type="password" placeholder="Password" />
              </div>

              <Button variant="primary" type="submit" className="btn-m">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
