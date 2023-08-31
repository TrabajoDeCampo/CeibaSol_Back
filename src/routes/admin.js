const {Router} = require('express');
const router = Router();
const {signIn, signOut } = require('../controller/admin');
const { authenticateToken } = require("../helper/jwt");


//inicio de sesion
router.post('/signIn', signIn );

//Cierre de sesion
router.post('/signOut', signOut );

module.exports= router;