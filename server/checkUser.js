export default function checkUser(user, pass, ip) {
  if (user == "admin" && pass == "admin") {
    return "admin";
  } else {
    return "user";
  }
}
