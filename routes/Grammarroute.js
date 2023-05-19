import express from "express";
import {grammarcheck} from "../controllers/Grammarchecker.js"

const router = express.Router();

router.post("/",grammarcheck)

export default router