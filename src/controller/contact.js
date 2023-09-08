const { transporter } = require("../helper/nodemailer");

const enviarCorreo = async (req, res) => {
  const { nombre, correo, telefono, mensaje, asunto } = req.body;

  const email = {
    from: "ceibasolsas@gmail.com", //  Remitente
    to: ["ceibasolsas@gmail.com"], //  Destinatario
    subject: `Soy ${nombre}, [${asunto}]`, //  Asunto
    html: `
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Correo</title>
        <style>
            /* Estilos CSS */
            body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
            }
            h1 {
                color: #85903E;
            }
            p {
                margin-bottom: 10px;
                color: #000000;
            }
            img.pequeña{
              width: 65px;
              height: 65px;
            }
        </style>
    </head>
    <body>
    
        <img class="pequeña" src="https://i.imgur.com/b3AJFOU.png"/>
        <h1>CONTACTO CEIBASOL S.A.S.</h1>
        <p>Hola soy <strong>${nombre}</strong></p>
        <p>Mi correo electrónico es: <strong>${correo}</strong></p>
        <p>Mi numero telefonico es: <strong>${telefono}</strong></p>
        <p>El motivo este mensaje es el siguiente</p>
        <p><strong>${mensaje}</strong></p>
        <p>Gracias por su atención.</p>

    </body>
    </html>
    `,
  };

  transporter.sendMail(email, (error, info) => {
    if (error) {
      return res.status(400).json({
        succes: false,
        err: "Error al enviar el correo electrónico",
      });
    } else {
      return res.status(200).json({
        succes: true,
        message: "Correo electrónico enviado correctamente",
      });
    }
  });
};

module.exports = {
  enviarCorreo,
};
