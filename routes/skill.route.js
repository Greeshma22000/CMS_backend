import express from "express";
import {createSkill, deleteSkill, getSkill, updateSkill} from "../controller/skill.controller.js";

const router = express.Router();

router.post("/", createSkill);
router.get("/", getSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;