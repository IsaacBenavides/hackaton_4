import { useState, useEffect, useContext } from "react";
import dates from "../repository/dates";

import listPatient from "../repository/patients";
import create_date from "../repository/create_date";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../provider/AuthProvider";
import listDoctor from "../repository/doctors";

export default function useCreateDate() {
  const nav = useNavigate();
  const [alldates, setAllDates] = useState([]);
  const [patients, setPatient] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loader, setLoader] = useState(false);
  const login = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setShowError] = useState({
    show: false,
    title: "",
    body: "",
  });

  useEffect(() => {
    try {
      setLoader(true);
      dates().then((res) => {
        setAllDates(res.data.results);
        setLoader(false);
      });
      listPatient()
        .then((res) => {
          setPatient(res.data.results);
        })
        .catch((err) => {});

      listDoctor()
        .then((res) => {
          setDoctors(res.data.results);
        })
        .catch((err) => {});
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function create(e) {
    e.preventDefault();
    setIsLoading(true);

    let body = {
      atention_date: e.target[1].value,
      atention_start: e.target[2].value,
      atention_end: e.target[3].value,
      status: e.target[4].value,
      description: e.target[5].value,
    };

    let doctorBody = {
      doctor: login.session.id,
      patient: e.target[0].value,
      ...body,
    };

    let patientBody = {
      patient: login.session.id,
      doctor: e.target[0].value,
    };
    try {
      await create_date(
        login.session.type_user === 1 ? patientBody : doctorBody
      );
      setIsLoading(false);
      nav("/home");
    } catch (error) {
      setIsLoading(false);
      setShowError({
        show: true,
        title: "Error",
        body: "No se pudo crear la cita",
      });
      console.log(error);
    }
  }

  return {
    alldates,
    loader,
    patients,
    create,
    isLoading,
    error,
    setShowError,
    doctors,
  };
}
