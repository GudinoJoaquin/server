export default function checkUser(user, pass) {
  if (user == "admin" && pass == "018f9475-9d35-711e-b9cd-4350b5c1d025") {
    return "admin";
  } else {
    return "user";
  }
}
