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
<<<<<<< HEAD
  host: "www.eest5mdp.edu.ar", //http://www.eest5mdp.edu.ar:8880/phpMyAdmin/index.php?route=/&route=%2F&db=anunciosT5mdp&table=anuncios
  user: "DiegoAdministradorT5", // DiegoAdministradorT5
  password: "EESTN5anunciosADMIN", // EESTN5anunciosADMIN
  database: "anunciosT5mdp", // anunciosT5mdp
  port: 3306,
=======
  host: "mysql.railway.internal", // Dirección del servidor de la base de datos
  user: "root", // Usuario de la base de datos
  password: "jBQJNtzcatsolqkjzhAuaJPSuhiKzpvC", // Contraseña de la base de datos
  database: "railway", // Nombre de la base de datos
  port: 3306 // Puerto del servidor MySQL
>>>>>>> a9098e296d3613f062429671a144e6294744eea1
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
