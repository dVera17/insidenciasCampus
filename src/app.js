import express from 'express';
import { config } from 'dotenv';
import routerArea from './routes/area.routes.js';
config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());

app.use('/api/area', routerArea);

export default app;