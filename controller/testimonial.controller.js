import Testimonial from "../models/Testimonial.js";

export const createTestimonial = async(req, res) => {
    try {
        const testimonial = await Testimonial.create(req.body);
        res.json(testimonial);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getTestimonial = async (req, res) => {
    try {
        const data = await Testimonial.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateTestimonial = async(req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(testimonial);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteTestimonial = async(req, res) => {
    try {
        await Testimonial.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};