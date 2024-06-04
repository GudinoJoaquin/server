// Importa el módulo express para crear un enrutador
import express from "express";

// Importa las funciones específicas de los archivos anuncios.js y email.js
import { enviarAnuncio, editarAnuncio, obtenerAnuncios, eliminarAnuncio } from "../js/anuncios.js";
import { enviarCorreo } from "../js/email.js"; 

// Crea un nuevo enrutador utilizando el módulo express.Router()
const router = express.Router();

// Define las rutas y las funciones controladoras correspondientes para manejar las solicitudes HTTP

// Ruta POST para enviar un nuevo anuncio
router.post("/admin/enviar-anuncio", enviarAnuncio);

// Ruta POST para editar un anuncio existente
router.post("/admin/editar-anuncio", editarAnuncio);

// Ruta GET para obtener todos los anuncios
router.get("/anuncios", obtenerAnuncios);

// Ruta DELETE para eliminar un anuncio
router.delete("/eliminar-anuncio", eliminarAnuncio);

// Ruta GET para enviar un correo electrónico (en este caso, un código de verificación)
router.get("/resend", enviarCorreo);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
export default router;
