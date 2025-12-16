import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model("Testimonial", testimonialSchema);