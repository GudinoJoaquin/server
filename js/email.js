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
    "to": ["infot5@eest5mdp.edu.ar"],
    "from": "EESTN5 <onboarding@resend.dev>",
    "html": "\n  <!DOCTYPE html>\n  <html lang=\"es\">\n  <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Código de Verificación</title>\n      <style>\n          body {\n              font-family: 'Arial', sans-serif;\n              background-color: #f4f4f9;\n              margin: 0;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              height: 100vh;\n              color: #333;\n          }\n          .container {\n              background-color: #fff;\n              padding: 20px 40px;\n              border-radius: 8px;\n              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n              text-align: center;\n          }\n          .header {\n              font-size: 24px;\n              margin-bottom: 20px;\n              color: #4CAF50;\n          }\n          .code {\n              font-size: 32px;\n              font-weight: bold;\n              letter-spacing: 2px;\n              color: #333;\n              margin: 20px 0;\n          }\n          .instructions {\n              font-size: 16px;\n              color: #777;\n          }\n          .footer {\n              margin-top: 30px;\n              font-size: 12px;\n              color: #aaa;\n          }\n      </style>\n  </head>\n  <body>\n      <div class=\"container\">\n          <div class=\"header\">Código de Verificación</div>\n          <div class=\"instructions\">Tu código de verificación es:</div>\n          <div class=\"code\">797680</div>\n          <div class=\"instructions\">Por favor, ingresa este código en el formulario de verificación.</div>\n          <div class=\"footer\">Si no solicitaste este código, cambia lo antes posible el nombre de usuario y la contraseña.</div>\n      </div>\n  </body>\n  </html>\n",
    "subject": "Código de Verificación"
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
