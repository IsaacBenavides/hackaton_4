import repository from "./base_repository";

export default async function listPatient() {
  let response = await repository.get("/user/patient_list/");

  return response;
}
