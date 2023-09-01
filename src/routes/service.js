const {Router} = require('express');
const router = Router();

const {crearServicio, listarServicios, eliminarServicio, actualizarServicio} = require('../controller/service') 

//crear servicio
router.post('/crearServicio', crearServicio);
//listar servicios
router.get('/listarServicios', listarServicios);
//eliminar servicio
router.delete('/eliminarServicio', eliminarServicio);
//actualizar servicio
router.put('/actualizarServicio', actualizarServicio);

module.exports = router;