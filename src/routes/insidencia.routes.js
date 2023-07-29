import { Router } from "express";
import { methodsInsidencias } from "../controllers/insidencia.controllers.js";
import middlewareInsidencia from "../middleware/mwInsidencia.js";
const router = Router();

router.get('/', methodsInsidencias.getAllInsidencias);
router.post('/', middlewareInsidencia, methodsInsidencias.addInsidencia);
export default router;