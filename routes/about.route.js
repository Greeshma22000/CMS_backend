import express from "express";
import {createAbout, deleteAbout, getAbout, updateAbout} from "../controller/about.controller.js"

const router = express.Router();

router.post("/", createAbout);
router.get("/", getAbout);
router.put("/:id", updateAbout);
router.delete("/:id", deleteAbout);

export default router;