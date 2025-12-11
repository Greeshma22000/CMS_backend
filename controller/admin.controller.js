import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"});
}

// Admin Login
export const loginAdmin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const admin = await Admin.findOne({email});
        if(!admin) return res.status(400).json({message: "Admin not found"});
        
        const isMatch = await admin.matchPassword(password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};