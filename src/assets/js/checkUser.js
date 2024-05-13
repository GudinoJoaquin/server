export default function checkUser(user, pass, ip) {
  if (user == "admin" && pass == "admin" && ip === '::1') {
    return "admin";
  } 
} 
