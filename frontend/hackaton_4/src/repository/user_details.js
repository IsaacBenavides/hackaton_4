import repository from "./base_repository";

async function requestUserDetails() {
  let response = await repository.get("/user/user_profile/");
  return response;
}

export default requestUserDetails;
