import mongoose, { mongo } from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Skill name is required"],
        trim: true
    },
    level: {
        type: String,
        required: [true, "Skill level is required"],
        trim: true
    }
});

export default mongoose.model("Skill", skillSchema);