// Importa las funciones generateVerificationCode y generateEmailHtml desde el archivo CONST.js
import { generateVerificationCode, generateEmailHtml } from "../CONST.js";

// Importa la clase Resend desde el módulo "resend"
import { Resend } from "resend";

// Crea una nueva instancia de Resend con la clave proporcionada
const resend = new Resend("re_decen5pK_JYNiX56vdDUKfrLERK8CoriF");

// Función para enviar un correo electrónico con un código de verificación
export const enviarCorreo = async (req, res) => {
  try {
    // Genera un código de verificación
    const verificationCode = generateVerificationCode();

    // Genera el HTML del correo electrónico utilizando el código de verificación generado
    const emailHtml = generateEmailHtml(verificationCode);

    // Envía el correo electrónico utilizando la API de Resend
    const { data, error } = await resend.emails.send({
      from: "EETN5 <onboarding@resend.dev>", // Dirección de correo electrónico del remitente
      to: ["infot5@eest5mdp.edu.ar"], // Dirección(es) de correo electrónico del destinatario
      subject: "Código de Verificación", // Asunto del correo electrónico
      html: emailHtml, // Contenido HTML del correo electrónico
    });

    // Si hay un error al enviar el correo electrónico, devuelve un error como respuesta HTTP
    if (error) {
      return res.status(400).json({ error });
    }

    // Si el correo electrónico se envió con éxito, devuelve el código de verificación como respuesta HTTP
    res.send(verificationCode);
  } catch (error) {
    // Si ocurre un error durante el proceso, devuelve un error como respuesta HTTP
    res.status(500).json({ error: error.message });
  }
};
