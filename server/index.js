import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";
import { format } from "date-fns";

const app = express();
const port = 1234;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const checkUser = (user, pass) => {
  if (user === "admin" && pass === "admin") {
    return "admin";
  } else {
    return null;
  }
};

const conexion = mysql.createConnection({
  host: "monorail.proxy.rlwy.net",
  user: "root",
  password: "lNvUCqwziZIuxnnSXjGYDDedmJRnxtVS",
  database: "railway",
  port: 52220,
});

app.post("/admin/enviar-anuncio", (req, res) => {
  const titulo = req.body.titulo || "Titulo";
  const mensaje = req.body.mensaje || "Mensaje";
  let img =
    req.body.imagen ||
    "https://lh3.googleusercontent.com/p/AF1QipOMvxtzYmxLLIoY56X1Hh8kkVR3kUASy6Rz38pT=s680-w680-h510";
  const adjunto = req.body.adjunto || "https://eest5mdp.edu.ar";
  const fecha = format(new Date(), "dd-MM-yyyy");

  const sql =
    "INSERT INTO anuncios (fecha, titulo, mensaje, imagen, contenido_adjunto) VALUES (?, ?, ?, ?, ?)";

  conexion.query(sql, [fecha, titulo, mensaje, img, adjunto], (err, result) => {
    if (err) {
      console.error(`Error al insertar el anuncio a la db ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.redirect(
      "https://eestn5-rho.vercel.app/anuncios/adminadminadminadminadminadminadminadminadminadminadminadmin"
    );
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
    res.redirect(
      "https://eestn5-rho.vercel.app/anuncios/adminadminadminadminadminadminadminadminadminadminadminadmin"
    );
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

  console.log(`${user} || ${pass}`);
  const userType = checkUser(user, pass);
  res.cookie("UserType", userType, { maxAge: 86400000000 });
  // Guarda el tipo de usuario en una cookie con expiración de 1 día

  res.redirect("http://localhost:5173/anuncios/");
});

app.get("/logoff", (req, res) => {
  res.clearCookie('UserType')

  res.redirect("https://eestn5-rho.vercel.app/anuncios/");
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
    res.redirect(
      "http://localhost:5173/anuncios/adminadminadminadminadminadminadminadminadminadminadminadmin"
    );
  });
});

app.get("/comprobar", (req, res) => {
  res.send("Server funcionando");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
