import Service from "../models/Service.js";

export const createService = async(req, res) => {
    try {
        const service = await Service.create(req.body);
        res.json(service);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getService = async (req, res) => {
    try {
        const data = await Service.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateService = async(req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(service);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteService = async(req,res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};