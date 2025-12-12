import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    github: String,
    demo: String,
    tech: [String] // ["React", "Node", "MongoDB"]
});

export default mongoose.model("Project", projectSchema)