import repository from "./base_repository";

async function requestLogin({ username, password }) {
  let response = await repository.post("/token/", {
    username: username,
    password: password,
  });

  if (response.status === 200) {
    repository.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.access}`;
  }

  return response;
}

export default requestLogin;
