import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.json(blog);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getBlog = async (req, res) => {
    try {
        const data = await Blog.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBlog = async(req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}