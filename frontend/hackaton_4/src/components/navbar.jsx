import React, { useContext } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import useHome from "../hooks/home_hook";
import { LoginContext } from "../provider/AuthProvider";

export const NavBarComponent = () => {
  const login = useContext(LoginContext);
  const { closeSession } = useHome();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          {login.session.type_user === 0
            ? "Admin"
            : login.session.type_user === 1
            ? "Pacientes"
            : "Doctores"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown
              title={`Bienvenido ${login.session.first_name} ${login.session.last_name}`}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={closeSession}>
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
