import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import connectDB from "../config/db.js";

dotenv.config();
await connectDB();

const createAdmin = async () => {
    try {
        const adminExists = await Admin.findOne({
      email: "admin@gmail.com"
    });

    if (adminExists) {
      console.log("❌ Admin already exists");
      process.exit();
    }

    await Admin.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin123"
    });

    console.log("✅ Admin created successfully");
    process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

createAdmin();