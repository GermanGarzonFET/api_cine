import { Router } from 'express';
import estadosController from '../controllers/estados.controller.js';

const router = Router();

//obtener todos
router.get('/estados', estadosController.getEstados );
router.get('/estados/:id', estadosController.getEstado );
router.post('/estados', estadosController.addEstados );
router.put('/estados/:id', estadosController.editEstados );
router.delete('/estados/:id', estadosController.deleteEstados );




export default router;