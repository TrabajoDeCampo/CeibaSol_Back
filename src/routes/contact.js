const {Router} = require('express');
const router = Router();
const {enviarCorreo} = require('../controller/contact');


//enviar correo
router.post('/enviarCorreo', enviarCorreo );

module.exports= router;