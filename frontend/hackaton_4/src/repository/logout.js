import repository from "./base_repository";

export default function logout() {
  delete repository.defaults.headers.common["Authorization"];
}
