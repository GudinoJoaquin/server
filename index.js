// Importa el módulo express para crear una aplicación Express
import express from "express";

// Importa el módulo cors para permitir solicitudes de recursos desde otros dominios
import cors from "cors";

// Importa el módulo bodyParser para analizar el cuerpo de las solicitudes HTTP
import bodyParser from "body-parser";

// Importa las rutas definidas en el archivo routes.js
import routes from "./config/routes.js"; 

// Crea una nueva aplicación Express
const app = express();

// Define el puerto en el que la aplicación escuchará las solicitudes HTTP
const port = 1234;

// Agrega middleware para habilitar el cors (Cross-Origin Resource Sharing)
app.use(cors());

// Agrega middleware para analizar el cuerpo de las solicitudes con formato URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Agrega middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Establece que la aplicación confiará en el encabezado "X-Forwarded-For" establecido por proxies
app.set("trust proxy", true);

// Utiliza las rutas definidas en el archivo routes.js para manejar las solicitudes HTTP
app.use(routes);

// Inicia el servidor y comienza a escuchar las solicitudes en el puerto especificado
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
