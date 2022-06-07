import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { NavBarComponent } from "../components/navbar";
import { Form, Button, Spinner } from "react-bootstrap";
import InfoDialog from "../components/info_dialog";
import useCreateDate from "../hooks/create_date_hook";

export const CreateDate = () => {
  const login = useContext(LoginContext);
  const nav = useNavigate();
  const { patients, error, setShowError, isLoading, create, doctors } =
    useCreateDate();

  useEffect(() => {
    if (!login.session.isLogged) {
      nav("/login");
    }
  }, []);

  return (
    <>
      <NavBarComponent />
      <div className="container mt-5">
        <Form onSubmit={create}>
          <Form.Group className="mb-3">
            <Form.Label>
              {login.session.type_user === 1 ? "Doctor" : "Paciente"}
            </Form.Label>
            <Form.Select
              aria-label={`Seleccione a un ${
                login.session.type_user === 1 ? "doctor" : "paciente"
              }`}
              required
            >
              <option>{`Seleccione a un ${
                login.session.type_user === 1 ? "doctor" : "paciente"
              }`}</option>
              {login.session.type_user === 1
                ? doctors.map((doctor) => {
                    return (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.username} - {doctor.first_name}{" "}
                        {doctor.last_name} - {doctor.dni}
                      </option>
                    );
                  })
                : patients.map((patient) => {
                    return (
                      <option key={patient.id} value={patient.id}>
                        {patient.username} - {patient.first_name}{" "}
                        {patient.last_name} - {patient.dni}
                      </option>
                    );
                  })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de atención</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hora Inicio</Form.Label>
            <Form.Control type="time" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hora Fin</Form.Label>
            <Form.Control type="time" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              aria-label="Seleccione a un Estado"
              defaultValue={0}
              required
            >
              <option value={0}>Pendiente</option>
              <option value={1}>Confirmado</option>
              <option value={2}>Cancelado</option>
              <option value={3}>Finalizado</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={4} required />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : (
              <p>Submit</p>
            )}
          </Button>
        </Form>
        <InfoDialog
          show={error.show}
          onClose={() => setShowError({ show: false, title: "", body: "" })}
          title={error.title}
          body={error.body}
        />
      </div>
    </>
  );
};
