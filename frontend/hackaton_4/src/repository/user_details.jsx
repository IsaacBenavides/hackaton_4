import repository from "./base_repository";

async function requestUserDetails({ token }) {
  let header = { Authorization: `Bearer ${token}` };
  let response = await repository.get("/user/user_profile/", {
    headers: header,
  });
  return response;
}

export default requestUserDetails;
