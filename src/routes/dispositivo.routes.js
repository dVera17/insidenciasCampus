import { Router } from "express";
import { methodsDispositivo } from "../controllers/dispositivo.controllers.js";
import middlewareDispositivo from "../middleware/mwDispositivo.js";
const router = Router();

router.get('/tipo_dispositivo', methodsDispositivo.getAllTipoDispositivos);
router.get('/', methodsDispositivo.getDispositivos);
router.post('/', middlewareDispositivo, methodsDispositivo.addDispositivo)

export default router;