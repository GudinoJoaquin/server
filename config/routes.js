import express from "express";
import { enviarAnuncio, editarAnuncio, obtenerAnuncios, eliminarAnuncio } from "../js/anuncios.js";
import { enviarCorreo } from "../js/email.js";
import { checkApiKey } from "../js/verificacion.js";

const router = express.Router();

router.get("/anuncios", obtenerAnuncios);
router.post("/admin/enviar-anuncio", enviarAnuncio);
router.post("/admin/editar-anuncio", editarAnuncio);
router.delete("/eliminar-anuncio", eliminarAnuncio);
router.get("/resend", checkApiKey("CBuW$66aWU!MbZ41h^JH^nLAw%^^sh%JfJmp82#ud*YX91Fx5N6%t6%!udFF"), enviarCorreo);

export default router;
