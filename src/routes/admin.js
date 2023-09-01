const {Router} = require('express');
const router = Router();
const {signIn, signOut, crearUsuario } = require('../controller/admin');
const { authenticateToken } = require("../helper/jwt");


//crear un usuario
router.post('/crearUsuario',[authenticateToken], crearUsuario );

//inicio de sesion
router.post('/signIn', signIn );

//Cierre de sesion
router.post('/signOut', signOut );

module.exports= router;