const { Router } = require('express');
const router = Router();
const { authenticateToken } = require("../helper/jwt");

const { crearTrabajo, listarTrabajos, verTrabajo, eliminarTrabajo, actualizarTrabajo } = require('../controller/works')

//crear trabajo relizado
router.post('/crearTrabajo', [authenticateToken], crearTrabajo);
//listar trabajo relizado
router.get('/listarTrabajos', listarTrabajos);
//ver un trabajo realizado
router.get('/verTrabajo', verTrabajo);
//eliminar trabajo relizado
router.delete('/eliminarTrabajo/:workId', [authenticateToken], eliminarTrabajo);
//actualizar trabajo relizado
router.put('/actualizarTrabajo', [authenticateToken], actualizarTrabajo);

module.exports = router;