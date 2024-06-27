// Importa la función format del módulo date-fns para formatear fechas
import { format } from "date-fns";

// Importa la conexión a la base de datos desde el archivo de configuración
import conexion from "../config/db.js";

// Importa la constante HOME desde el archivo CONST.js
import { HOME } from "../CONST.js";

// Función para enviar un nuevo anuncio
export const enviarAnuncio = (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud HTTP o establece valores predeterminados
  const api = req.body.api;

  if (!api) {
    res.status(401).send("Usuario no autorizado");

    return;
  }

  const titulo = req.body.titulo || "Titulo";
  const mensaje = req.body.mensaje || "Mensaje";
  let img =
    req.body.imagen ||
    "https://lh3.googleusercontent.com/p/AF1QipOMvxtzYmxLLIoY56X1Hh8kkVR3kUASy6Rz38pT=s680-w680-h510";
  const adjunto = req.body.adjunto || "https://eest5mdp.edu.ar";
  const fecha = format(new Date(), "dd-MM-yyyy"); // Formatea la fecha actual

  // Consulta SQL para insertar un nuevo anuncio en la base de datos
  const sql =
    "INSERT INTO anuncios (fecha, titulo, mensaje, imagen, contenido_adjunto) VALUES (?, ?, ?, ?, ?)";

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [fecha, titulo, mensaje, img, adjunto], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al insertar el anuncio a la db ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Redirige a la página de inicio después de que se haya insertado el anuncio con éxito
    res.redirect(HOME);
  });
};

// Función para editar un anuncio existente
export const editarAnuncio = (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud HTTP
  const api = req.body.api;

  if (!api) {
    // Debes usar res.status en lugar de req.status para enviar la respuesta de error
    res.status(401).send('Usuario no autorizado');
    return;
  }

  const { titulo, mensaje, imagen, adjunto, id } = req.body;

  // Consulta SQL para actualizar un anuncio en la base de datos
  const sql =
    "UPDATE anuncios SET titulo=?, mensaje=?, imagen=?, contenido_adjunto=? WHERE id = ?";

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [titulo, mensaje, imagen, adjunto, id], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al modificar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Redirige a la página de inicio después de que se haya editado el anuncio con éxito
    res.redirect(HOME);
  });
};


// Función para obtener todos los anuncios o un anuncio específico
export const obtenerAnuncios = (req, res) => {
  const id = req.query.id; // Obtiene el ID del anuncio de la consulta de la URL
  let sql = "SELECT * FROM anuncios"; // Consulta SQL para obtener todos los anuncios

  // Si se proporciona un ID en la consulta, agrega una cláusula WHERE para filtrar por ID
  if (id) {
    sql += " WHERE id = ?";
  }

  sql += " ORDER BY id DESC"; // Ordena los anuncios por ID de forma descendente

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [id], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al obtener los datos en la base de datos ${err}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Devuelve los resultados de la consulta como respuesta HTTP
    res.send(result);
  });
};

// Función para eliminar un anuncio de la base de datos
export const eliminarAnuncio = (req, res) => {
  const { api } = req.body;
  
  if (!api) {
    res.status(401).send("Usuario no autorizado");
    return;
  }
  const id = req.query.id; // Obtiene el ID del anuncio de la consulta de la URL

  // Consulta SQL para eliminar un anuncio de la base de datos
  const sql = "DELETE FROM anuncios WHERE id = ?";

  // Ejecuta la consulta SQL en la base de datos
  conexion.query(sql, [id], (err, result) => {
    // Maneja los errores si ocurren durante la ejecución de la consulta
    if (err) {
      console.error(`Error al eliminar el anuncio ${err.name}`);
      res.status(500).send("Error interno del servidor");
      return;
    }
    // Redirige a la página de inicio después de que se haya eliminado el anuncio con éxito
    res.redirect(HOME);
  });
};
