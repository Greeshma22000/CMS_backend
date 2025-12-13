import express from "express";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  res.json({
    imageUrl: `/uploads/${req.file.filename}`
  });
});

export default router;
