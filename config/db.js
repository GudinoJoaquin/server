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
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'anunciost5mdp'
})

conexion.connect((err) => {
  if(err){
      throw err;
  } else {
      console.log('Conectado a la base de datos')
  }
})


// Exporta la conexión para que pueda ser utilizada en otros archivos
export default conexion;
