import express from 'express';
import { config } from 'dotenv';
import { verifyAuth } from './jwt/mwjwtAuth.js';
import routerJWT from './routes/JWT.routes.js';
import routerArea from './routes/area.routes.js';
import routerTrainer from './routes/trainer.routes.js';
import routerDispositivo from './routes/dispositivo.routes.js';
import routerInsidencia from './routes/insidencia.routes.js';
config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());

app.use('/api/token', routerJWT);
app.use('/api/area', verifyAuth, routerArea);
app.use('/api/trainer', verifyAuth, routerTrainer);
app.use('/api/dispositivo', verifyAuth, routerDispositivo);
app.use('/api/insidencia', verifyAuth, routerInsidencia);

export default app;