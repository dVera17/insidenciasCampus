import { Router } from "express";
import { generateToken } from "../jwt/jwtToken.js";
const router = Router();

router.get('/:nombre', generateToken);

export default router;