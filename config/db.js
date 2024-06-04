// Importa el módulo mysql desde la biblioteca mysql2
import mysql from "mysql2";

// Crea una conexión a la base de datos utilizando los parámetros proporcionados
const conexion = mysql.createConnection({
  host: "monorail.proxy.rlwy.net", // Dirección del servidor de la base de datos
  user: "root", // Nombre de usuario para acceder a la base de datos
  password: "lNvUCqwziZIuxnnSXjGYDDedmJRnxtVS", // Contraseña para acceder a la base de datos
  database: "railway", // Nombre de la base de datos a la que se conectará
  port: 52220, // Puerto en el que el servidor de la base de datos está escuchando
});

// Intenta conectarse a la base de datos
conexion.connect((err) => {
  // Si hay un error en la conexión, muestra un mensaje de error en la consola
  if (err) {
    console.error(`Error connecting to the database: ${err.stack}`);
    return;
  }
  // Si la conexión es exitosa, muestra un mensaje indicando el ID de hilo de la conexión en la consola
  console.log(`Connected to the database as ID ${conexion.threadId}`);
});

// Exporta la conexión para que pueda ser utilizada en otros archivos
export default conexion;
