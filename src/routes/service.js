const {Router} = require('express');
const router = Router();
const { authenticateToken } = require("../helper/jwt");

const {crearServicio, listarServicios, eliminarServicio, actualizarServicio} = require('../controller/service') 

//crear servicio
router.post('/crearServicio',[authenticateToken], crearServicio);
//listar servicios
router.get('/listarServicios', listarServicios);
//eliminar servicio
router.delete('/eliminarServicio',[authenticateToken], eliminarServicio);
//actualizar servicio
router.put('/actualizarServicio',[authenticateToken], actualizarServicio);

module.exports = router;