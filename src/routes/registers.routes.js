import { Router } from "express";
import { pool } from "../db.js";
import { getRegisters } from "../controllers/registers.controller.js";

const router = Router();

router.get("/registers", getRegisters);

export default router;
