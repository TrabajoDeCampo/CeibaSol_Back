const { transporter } = require("../helper/nodemailer");

const enviarCorreo = async (req, res) => {

  const { correoDestino, asunto, mensaje } = req.body;

  const correo = {
    from: "rjuanjoser@gmail.com",       //  Remitente
    to: correoDestino,                  //  Destinatario
    subject: asunto,                    //  Asunto
    text: mensaje,                      //  Cuerpo del mensaje
  };

  transporter.sendMail(correo, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error al enviar el correo electrónico");
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res.send("Correo electrónico enviado correctamente");
    }
  });
};

module.exports = {
  enviarCorreo,
};
