import Experience from "../models/Experience.js";

export const createExperience = async(req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.json(experience);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getExperience = async(req, res) => {
    try {
        const data = await Experience.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(experience);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteExperience = async (req, res) => {
    try {
        await Experience.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};