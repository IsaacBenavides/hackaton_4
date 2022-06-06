import repository from "./base_repository";

async function dates() {
  return await repository.get("/dates/date_list/");
}

export default dates;
