import express from "express";
import { enviarAnuncio, editarAnuncio, obtenerAnuncios, eliminarAnuncio } from "../js/anuncios.js";
import { enviarCorreo } from "../js/email.js";
import { checkApiKey } from "../js/verificacion.js";

const router = express.Router();

router.get("/anuncios", obtenerAnuncios);
router.post("/admin/enviar-anuncio", enviarAnuncio);
router.post("/admin/editar-anuncio", checkApiKey("v"), editarAnuncio);
router.delete("/eliminar-anuncio", checkApiKey("v"), eliminarAnuncio);
router.get("/resend", checkApiKey("nv"), enviarCorreo);

export default router;
