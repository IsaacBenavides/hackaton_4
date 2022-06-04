import repository from "./base_repository";
import axios from "axios";

async function requestLogin({ username, password }) {
  let response = await axios.post("http://localhost:8000/api/token/", {
    username: username,
    password: password,
  });

  return response;
}

export default requestLogin;
