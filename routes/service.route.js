import express from "express";
import {createService, deleteService, getService, updateService} from "../controller/service.controller.js"

const router = express.Router();

router.post("/", createService);
router.get("/", getService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;