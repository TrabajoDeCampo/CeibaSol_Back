const { Router } = require('express');
const router = Router();
const { authenticateToken } = require("../helper/jwt");

const { crearServicio, listarServicios, verServicio, eliminarServicio, actualizarServicio } = require('../controller/service')

//crear servicio
router.post('/crearServicio', [authenticateToken], crearServicio);
//listar todos los servicios
router.get('/listarServicios', listarServicios);
//ver un servicio
router.get('/verServicio', verServicio);
//eliminar servicio
router.delete('/eliminarServicio/:serviceId', [authenticateToken], eliminarServicio);
//actualizar servicio
router.put('/actualizarServicio', [authenticateToken], actualizarServicio);

module.exports = router;