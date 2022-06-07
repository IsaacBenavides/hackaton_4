import repository from "./base_repository";

export default async function listDoctor() {
  let response = await repository.get("/user/doctor_list/");

  return response;
}
