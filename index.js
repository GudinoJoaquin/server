import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";
import { format } from "date-fns";
import { HOME, generateVerificationCode, generateEmailHtml } from "./CONST.js";
import { Resend } from "resend";

const resend = new Resend("re_Rjax6ev1_JuV7mKN3QErMoBMuGY5gXRsU");
const app = express();
const port = 1234;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("trust proxy", true);

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
  let img = req.body.imagen || "https://lh3.googleusercontent.com/p/AF1QipOMvxtzYmxLLIoY56X1Hh8kkVR3kUASy6Rz38pT=s680-w680-h510";
  const adjunto = req.body.adjunto || "https://eest5mdp.edu.ar";
  const fecha = format(new Date(), "dd-MM-yyyy");

  const sql = "INSERT INTO anuncios (fecha, titulo, mensaje, imagen, contenido_adjunto) VALUES (?, ?, ?, ?, ?)";

  conexion.query(sql, [fecha, titulo, mensaje, img, adjunto], (err, result) => {
    if (err) {
      console.error(`Error al insertar el anuncio a la db ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.redirect(HOME);
  });
});

app.post("/admin/editar-anuncio", (req, res) => {
  const titulo = req.body.titulo;
  const mensaje = req.body.mensaje;
  const img = req.body.imagen;
  const adjunto = req.body.adjunto;
  const id = req.body.anuncioID;

  const sql = "UPDATE anuncios SET titulo=?,mensaje=?,imagen=?,contenido_adjunto=? WHERE id = ?";

  conexion.query(sql, [titulo, mensaje, img, adjunto, id], (err, result) => {
    if (err) {
      console.error(`Error al modificar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.redirect(HOME);
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

app.delete("/eliminar-anuncio", (req, res) => {
  const id = req.query.id;

  const sql = "DELETE FROM anuncios WHERE id = ?";

  conexion.query(sql, [id], (err, result) => {
    if (err) {
      console.error(`Error al eliminar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.redirect(HOME);
  });
});

app.get("/Comprobar", async (req, res) => {
  console.log("hola todo ok");
});

const contadores = [];

app.get("/login", (req, res) => {
  const ip = req.ip;
  const nombre = req.query.user || "anónimo";

  // Verifica si ya existe un contador para esta dirección IP, si no, inicializa el contador en 1
  if (!contadores[ip]) {
    contadores[ip] = 1;
  } else {
    contadores[ip]++; // Incrementa el contador para esta dirección IP
  }

  res.send(
    `Usuario ${nombre} desde la IP ${ip} ingreso ${contadores[ip]} veces`
  );
});

app.get("/resend", async (req, res) => {
  try {
    const verificationCode = generateVerificationCode();
    const emailHtml = generateEmailHtml(verificationCode);

    const { data, error } = await resend.emails.send({
      from: "EESTN5 <onboarding@resend.dev>",
      to: ["facucientec5@gmail.com"],
      subject: "Código de Verificación",
      html: emailHtml,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.send(verificationCode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
