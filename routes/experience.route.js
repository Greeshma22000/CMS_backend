import express from "express";
import {createExperience, deleteExperience, getExperience, updateExperience} from "../controller/experience.controller.js";

const router = express.Router();

router.post("/", createExperience);
router.get("/", getExperience);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;