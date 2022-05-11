import { Router } from 'express';
import peliculasControllers from '../controllers/peliculas.controller';

const router = Router();

//obtener todos
router.get('/peliculas', peliculasControllers.get );
router.get('/peliculas/:id', peliculasControllers.getId );
router.post('/peliculas', peliculasControllers.add );
router.put('/peliculas/:id', peliculasControllers.edit );
router.delete('/peliculas/:id', peliculasControllers.deleteId );




export default router;