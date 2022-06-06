import repository from "./base_repository";

export default async function register({
  username,
  password,
  email,
  first_name,
  last_name,
  dni,
  phone,
  address,
  gender,
  birth_date,
  type_user,
}) {
  let response = await repository.post("/user/create_user/", {
    username: username,
    password: password,
    email: email,
    first_name: first_name,
    last_name: last_name,
    dni: dni,
    phone: phone,
    address: address,
    gender: gender,
    birth_date: birth_date,
    type_user: type_user,
  });

  return response;
}
