// Importa el módulo mysql desde la biblioteca mysql2
import mysql from "mysql2";

// Crea una conexión a la base de datos utilizando los parámetros proporcionados
/*const conexion = mysql.createConnection({
  host: "www.eest5mdp.edu.ar", // Dirección del servidor de la base de datos
  user: "DiegoAdministradorT5", // Usuario de la base de datos
  password: "EESTN5anunciosADMIN", // Contraseña de la base de datos
  database: "anunciosT5mdp", // Nombre de la base de datos
  port: 3306 // Puerto del servidor MySQL
}); */

const conexion = mysql.createConnection({
  host: "localhost", // Dirección del servidor de la base de datos
  user: "root", // Usuario de la base de datos
  password: "", // Contraseña de la base de datos
  database: "anunciost5mdp", // Nombre de la base de datos
  //port: 3306 // Puerto del servidor MySQL
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
