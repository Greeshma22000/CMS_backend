import About from "../models/About.js";

export const createAbout = async (req, res) => {
    try {
        const about = await About.create(req.body);
        res.json(about);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getAbout = async (req, res) => {
    try {
        const data = await About.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateAbout = async (req, res) => {
    try {
        const about = await About.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(about);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteAbout = async (req, res) => {
    try {
        await About.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};