import React from "react";
import useDoctor from "../hooks/doctor_hook";
import { Button, Spinner, Card } from "react-bootstrap";
import "../styles/doctor.css";
import { useNavigate } from "react-router-dom";

export const Doctor = () => {
  const { alldates, loader } = useDoctor();
  const nav = useNavigate();
  return (
    <div className="container mt-5">
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>Mis Citas </h1>
          <Button
            variant="primary"
            onClick={() => {
              nav("/home/create_date");
            }}
          >
            Agregar Cita
          </Button>
        </div>
        {loader ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="my-5 row">
            {alldates.length > 0 ? (
              alldates.map((date) => {
                return (
                  <Card
                    key={date.id}
                    style={{
                      width: "18rem",
                      marginBottom: "2rem",
                      marginRight: "2rem",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        Paciente: {date.patient.first_name}{" "}
                        {date.patient.last_name}
                      </Card.Title>
                      <Card.Text>{date.patient.dni}</Card.Text>
                      <Card.Text>
                        Doctor: {date.doctor.first_name} {date.doctor.last_name}
                      </Card.Text>
                      <Card.Text>{date.description}</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <h1>No hay citas</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
