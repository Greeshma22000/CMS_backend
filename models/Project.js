import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    // title: String,
    // description: String,
    // image: String,
    // github: String,
    // demo: String,
    // tech: [String] // ["React", "Node", "MongoDB"]
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: String
});

export default mongoose.model("Project", projectSchema)