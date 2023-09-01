const {Router} = require('express');
const router = Router();

const {crearTrabajo, listarTrabajo, eliminarTrabajo, actualizarTrabajo} = require('../controller/works') 

//crear trabajo relizado
router.post('/crearServicio', crearTrabajo);
//listar trabajo relizado
router.get('/listarServicios', listarTrabajo);
//eliminar trabajo relizado
router.delete('/eliminarServicio', eliminarTrabajo);
//actualizar trabajo relizado
router.put('/actualizarServicio', actualizarTrabajo);

module.exports = router;