import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/admin.route.js";
import uploadRoutes from "./routes/upload.route.js";
import aboutRoutes from "./routes/about.route.js";
import skillRoutes from "./routes/skill.route.js";
import projectRoutes from "./routes/project.route.js";
import blogRoutes from "./routes/blog.route.js";
import experienceRoutes from "./routes/experience.route.js";
import testimonialRoutes from "./routes/testimonial.route.js";
import serviceRoutes from "./routes/service.route.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

// DB connection
connectDB();
// Static folder for uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/admin", adminRoutes);

// CMS content routes
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/services", serviceRoutes);

// file upload route
app.use("/api/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on POrt ${PORT}!...✅✅`));