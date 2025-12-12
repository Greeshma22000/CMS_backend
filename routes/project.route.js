import express from "express";
import {createProject, deleteProject, getProject, updateProject} from "../controller/project.controller.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;