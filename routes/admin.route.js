import express from "express";
import { loginAdmin } from "../controller/admin.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/profile", protect, (req, res) => {
    res.json({message: "Admin Profile", admin: req.admin});
});

export default router;