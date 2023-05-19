import express from "express";
import {Analyze } from "../controllers/Analyze.js";

const router = express.Router();

router.post("/analyze",Analyze)

export default router