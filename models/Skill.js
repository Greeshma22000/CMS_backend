import mongoose, { mongo } from "mongoose";

const skillSchema = new mongoose.Schema({
    name: String,
    level: String,
    icon: String,
});

export default mongoose.model("Skill", skillSchema);