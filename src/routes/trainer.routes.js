import { Router } from "express";
import { methodsTrainer } from "../controllers/trainer.controllers.js";
import middlewareTrainer from "../middleware/mwTrainer.js";
const router = Router();

router.get('/', methodsTrainer.getDataTrainers);
router.get('/:cedula', methodsTrainer.getDataTrainer)
router.post('/', middlewareTrainer, methodsTrainer.addTrainer);

export default router;