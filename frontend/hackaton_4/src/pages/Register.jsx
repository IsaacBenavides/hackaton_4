import React from "react";
import "../styles/register.css";

import { Button, Spinner } from "react-bootstrap";
import InfoDialog from "../components/info_dialog";
import useRegister from "../hooks/register_hook";

export const RegisterPage = () => {
  const {
    isDoctor,
    setIsDoctor,
    isLoading,
    registerUser,
    error,
    setShowError,
  } = useRegister();
  return (
    <>
      <div className="register_page">
        <div className="register_page_container">
          <div className="register_page_body">
            <div className="register_body_container">
              <form action="" onSubmit={registerUser}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Usuario"
                      className="form-control my-2"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="form-control my-2"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control my-2"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="form-control my-2"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="form-control my-2"
                      required
                    />
                    <input
                      type="number"
                      placeholder="DNI"
                      className="form-control my-2"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Telefono"
                      className="form-control my-2"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Direccion"
                      className="form-control my-2"
                      required
                    />
                    <select
                      className="form-select my-2"
                      aria-label="Genero"
                      required
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Genero
                      </option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                      <option value="O">Otro</option>
                    </select>
                    <label> Fecha de nacimiento </label>
                    <input className="form-control my-2" type="date" required />
                    <select
                      className="form-select my-3"
                      aria-label="Tipo de usuario"
                      onChange={(value) => {
                        setIsDoctor(value.target.value === "2");
                      }}
                      required
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Tipo de Usuario
                      </option>
                      <option value="1">Paciente</option>
                      <option value="2">Doctor</option>
                    </select>
                    {isDoctor && (
                      <input
                        type="number"
                        placeholder="Colegiatura"
                        className="my-3 form-control"
                        required
                      />
                    )}
                  </div>
                </div>
                <Button variant="primary" type="submit" className="btn-m col">
                  {isLoading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    <p>Registro</p>
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

// isLoading ? (
// 	<Spinner animation="border" role="status">
// 	  <span className="visually-hidden">Loading...</span>
// 	</Spinner>
//   ) :
