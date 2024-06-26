import conexion from "../config/db.js";
import { HOME } from "../CONST.js";

import conexion from "../config/db.js";

export const verificarUsuario = (req, res) => {
  const sql = "SELECT * FROM admin WHERE name = ? AND pass = ?";
  const user = req.body.user;
  const pass = req.body.pass;

  conexion.query(sql, [user, pass], (err, result) => {
    if (err) {
      console.error(`Error al buscar usuario en la base de datos: ${err}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.status(401).send("Usuario no encontrado");
    }
  });
};


export const updateUsuario = (req, res) => {
  const newUser = req.body.user;
  const newPass = req.body.pass;
  const newCookie = req.body.cookie;
  const api = req.body.api;

  if (!api) {
    res.status(401).send("Usuario no autorizado");
    return;
  }

  const sql = "UPDATE admin SET name = ?, pass = ?, cookie_value = ? WHERE id = 1";

  conexion.query(sql, [newUser, newPass, newCookie], (err, result) => {
    if (err) {
      console.error(`Error al actualizar el usuario en la base de datos: ${err}`);
      res.status(500).send("Error interno de servidor");
      return;
    }
    res.redirect(HOME);
  });
};
