import { Router } from "express";
import { methodsArea } from "../controllers/area.controllers.js";
const router = Router();

router.get('/', methodsArea.getAllAreas);
router.get('/tipo_area', methodsArea.getAllTipoArea);

export default router;