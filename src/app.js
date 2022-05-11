//importaciones de las librerias
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors'
import fileUpload from 'express-fileupload'
import path from 'path';


//creando el servidor

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(fileUpload());




//rutas
app.get('/', (req, res) => {
    res.json({
        "imformacion del proyecto": {
            "data":"demo api reservas, salas de cine"
        },

    })
});


//importaciones de las rutas

import RolesRouter from './routes/roles.router';
import UserRouter from './routes/usuarios.router';
import LoginRouter from './routes/login.router';
import EstadosRouter from './routes/estados.router';
import PeliculasRouter from './routes/peliculas.router';
import ClientesRouter from './routes/clientes.router';
import SalasRouter from './routes/salas.router';




app.use('/api',RolesRouter);
app.use('/api',UserRouter);
app.use('/api',LoginRouter);
app.use('/api',EstadosRouter);
app.use('/api',PeliculasRouter);
app.use('/api',ClientesRouter);
app.use('/api',SalasRouter);






app.use(express.static(path.join(__dirname, './controllers/public')));

//libs
import { createRoles } from './libs/onInit';
createRoles();

//exportando el app
module.exports = app;