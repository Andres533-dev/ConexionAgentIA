import express from "express";
import { generateAndWait } from "../controllers/videoController.js";

const router = express.Router();

router.post("/generate", generateAndWait);

export default router;