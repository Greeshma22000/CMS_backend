import Project from "../models/Project.js";

export const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.json(project);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getProject = async (req, res) => {
    try {
        const data = await Project.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(project);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteProject = async(req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};