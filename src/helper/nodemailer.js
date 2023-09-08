const nodemailer = require("nodemailer");

// Configurar el servidor SMTP para enviar el correo electrónico
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "rjuanjoser@gmail.com",
    pass: "vyhjpjupenjdedrq",
  },
});

module.exports = {
  transporter,
};