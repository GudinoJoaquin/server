// export const HOME = "https://admin-eta-opal.vercel.app/";
export const HOME = "http://localhost:5173/";

export const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const generateEmailHtml = (verificationCode) => `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Código de Verificación</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f9;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              color: #333;
          }
          .container {
              background-color: #fff;
              padding: 20px 40px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
          .header {
              font-size: 24px;
              margin-bottom: 20px;
              color: #4CAF50;
          }
          .code {
              font-size: 32px;
              font-weight: bold;
              letter-spacing: 2px;
              color: #333;
              margin: 20px 0;
          }
          .instructions {
              font-size: 16px;
              color: #777;
          }
          .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #aaa;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Código de Verificación</div>
          <div class="instructions">Tu código de verificación es:</div>
          <div class="code">${verificationCode}</div>
          <div class="instructions">Por favor, ingresa este código en el formulario de verificación.</div>
          <div class="footer">Si no solicitaste este código, cambia lo antes posible el nombre de usuario y la contraseña.</div>
      </div>
  </body>
  </html>
`;
