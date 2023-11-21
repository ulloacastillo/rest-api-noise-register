import { Router } from "express";
import { pool } from "../db.js";
import { postRegister } from "../controllers/index.controller.js";

const router = Router();

router.post("/", postRegister);

export default router;
