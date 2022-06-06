import repository from "./base_repository";

export default async function create_date(data) {
  return await repository.post("/dates/create_date/", data);
}
