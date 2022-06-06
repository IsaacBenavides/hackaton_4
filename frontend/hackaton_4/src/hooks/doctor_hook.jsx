import { useState, useEffect, useContext } from "react";
import dates from "../repository/dates";

import listPatient from "../repository/patients";
import create_date from "../repository/create_date";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../provider/AuthProvider";

export default function useDoctor() {
  const nav = useNavigate();
  const [alldates, setAllDates] = useState([]);
  const [patients, setPatient] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function create(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await create_date({
        doctor: login.session.id,
        patient: e.target[0].value,
        atention_date: e.target[1].value,
        atention_start: e.target[2].value,
        atention_end: e.target[3].value,
        status: e.target[4].value,
        description: e.target[5].value,
      });
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
  };
}
