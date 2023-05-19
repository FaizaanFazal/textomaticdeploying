import express from "express";
import { CountUsers} from "../controllers/Countusers.js";

const router = express.Router();

router.get("/",CountUsers)

export default router