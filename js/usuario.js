import conexion from "../config/db.js";
import { HOME } from "../CONST.js";

export const verificarUsuario = (req, res) => {
  // Toma el valor del formulario de inicio de sesión
  const user = req.body.user || "admin";
  const pass = req.body.pass || "admin";

  const sql = "SELECT * FROM admin WHERE name = ? AND pass = ?";

  conexion.query(sql, [user, pass], (err, result) => {
    if (err) {
      console.error(`Error al buscar usuario en la base de datos: ${err}`);
      res.status(500).send("Error interno del servidor");
      return;
    }

    if (result.length === 0) {
      res.status(401).send("Usuario no autorizado");
      return;
    }

    const userData = result[0];
    res.send({
      user: userData.name,
      pass: userData.pass,
      cookie_value: userData.cookie_value,
      cookie_name: userData.cookie_name // Agrega el campo cookie_name
    });
  });
};

export const updateUsuario = (req, res) => {
  // Toma el valor del formulario de la configuración
  const newUser = req.body.user;
  const newPass = req.body.pass;
  const newCookie = req.body.cookie;
  const newCookieName = req.body.cookie_name; // Nuevo campo cookie_name
  const api = req.body.api;

  if (!api) {
    res.status(401).send("Usuario no autorizado");
    return;
  }

  const sql =
    "UPDATE admin SET name = ?, pass = ?, cookie_value = ?, cookie_name = ? WHERE id = 1";

  conexion.query(sql, [newUser, newPass, newCookie, newCookieName], (err, result) => {
    if (err) {
      console.error(`Error al actualizar el usuario en la base de datos: ${err}`);
      res.status(500).send("Error interno de servidor");
      return;
    }
    res.redirect(HOME);
  });
};
