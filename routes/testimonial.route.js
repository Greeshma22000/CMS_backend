import express from "express";
import {createTestimonial, deleteTestimonial, getTestimonial, updateTestimonial} from "../controller/testimonial.controller.js";

const router = express.Router();

router.post("/", createTestimonial);
router.get("/", getTestimonial);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

export default router;