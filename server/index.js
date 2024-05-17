import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";
import checkUser from "../client/src/assets/js/checkUser.js";
import { format } from "date-fns";

const app = express();
const port = 1234;

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "anuncios",
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/admin/enviar-anuncio", (req, res) => {
  const titulo = req.body.titulo;
  const mensaje = req.body.mensaje;
  let img = req.body.imagen;
  const adjunto = req.body.adjunto;
  const fecha = format(new Date(), "dd-MM-yyyy");

  if (img === "" || img == null) {
    img =
      "https://lh3.googleusercontent.com/p/AF1QipOMvxtzYmxLLIoY56X1Hh8kkVR3kUASy6Rz38pT=s680-w680-h510";
  }

  const sql =
    "INSERT INTO anuncios (fecha, titulo, mensaje, imagen, contenido_adjunto) VALUES (?, ?, ?, ?, ?)";

  conexion.query(sql, [fecha, titulo, mensaje, img, adjunto], (err, result) => {
    if (err) {
      console.error(`Error al insertar el anuncio a la db ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.redirect("http://localhost:5173/");
  });
});

app.post("/admin/editar-anuncio", (req, res) => {
  const titulo = req.body.titulo;
  const mensaje = req.body.mensaje;
  const img = req.body.imagen;
  const adjunto = req.body.adjunto;
  const id = req.body.anuncioID;

  const sql =
    "UPDATE anuncios SET titulo=?,mensaje=?,imagen=?,contenido_adjunto=? WHERE id = ?";

  conexion.query(sql, [titulo, mensaje, img, adjunto, id], (err, result) => {
    if (err) {
      console.error(`Error al modificar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.redirect("http://localhost:5173/");
  });
});

// Ruta para obtener los anuncios
app.get("/anuncios", (req, res) => {
  const id = req.query.id;
  let sql = "SELECT * FROM anuncios";
  if (id) {
    sql += " WHERE id = ?";
  }
  sql += " ORDER BY id DESC";
  conexion.query(sql, [id], (err, result) => {
    if (err) {
      console.error(`Error al obtener los datos en la base de datos ${err}`);
      res.status(500).send("Error interno del servidor");
      return;
    }

    res.send(result);
  });
});

app.post("/admin/login", (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  const userType = checkUser(user, pass);

  // Guarda el tipo de usuario en una cookie con expiración de 1 día
  res.cookie("userType", userType, { maxAge: 86400000 });

  // Retorna el tipo de usuario como respuesta
  res.redirect("http://localhost:5173/");
});

app.get("/logoff", (req, res) => {
  res.clearCookie("userType");
  res.redirect("http://localhost:5173/");
});

app.delete("/eliminar-anuncio", (req, res) => {
  const id = req.query.id;

  const sql = "DELETE FROM anuncios WHERE id = ?";

  conexion.query(sql, [id], (err, result) => {
    if (err) {
      console.error(`Error al eliminar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.send("Anuncio eliminado correctamente");
  });
});

// app.get("/", (req, res) => {
//   res.send("Server funcionando");
// });

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
