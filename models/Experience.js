import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    duration: String,
    description: String,
});

export default mongoose.model("Experience", experienceSchema);