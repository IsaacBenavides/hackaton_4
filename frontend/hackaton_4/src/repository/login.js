import repository from "./base_repository";

async function requestLogin({ username, password }) {
  let response = await repository.post("/token/", {
    username: username,
    password: password,
  });

  return response;
}

export default requestLogin;
