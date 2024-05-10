export default function checkUser(user, pass) {
  if (user == "admin" && pass == "admin") {
    return "admin";
  } else {
    return "user";
  }
}
