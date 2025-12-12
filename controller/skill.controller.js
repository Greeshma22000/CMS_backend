import Skill from "../models/Skill.js";

export const createSkill = async(req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.json(skill);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getSkill = async (req, res) => {
    try {
        const data = await Skill.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateskill = async (req,res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(skill);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteSkill = async (req, res) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};