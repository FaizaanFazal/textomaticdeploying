import express from "express";
import { Download } from "../controllers/Downloadfile.js";

const router = express.Router();

router.get("/", Download)


export default router


