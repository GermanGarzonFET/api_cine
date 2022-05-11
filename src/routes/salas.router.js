import { Router } from 'express';
import SalasController from '../controllers/salas.controller';

const router = Router();

//obtener todos
router.get('/salas', SalasController.get );
router.get('/salas/:id', SalasController.getId );
router.post('/salas', SalasController.add );
router.put('/salas/:id', SalasController.edit );
router.delete('/salas/:id', SalasController.deleteId );




export default router;