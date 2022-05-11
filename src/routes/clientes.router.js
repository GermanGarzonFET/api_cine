import { Router } from 'express';
import ClientesController from '../controllers/clientes.controller';

const router = Router();

//obtener todos
router.get('/clientes', ClientesController.get );
router.get('/clientes/:id', ClientesController.getId );
router.post('/clientes', ClientesController.add );
router.put('/clientes/:id', ClientesController.edit );
router.delete('/clientes/:id', ClientesController.deleteId );




export default router;