import blogModel from '../models/blogModel.js';
import fs from 'fs'

const addBlog = async (req, res) => {
    try {
        let image_filename = req.file.filename;

        const blog = new blogModel({
            title: req.body.title,
            description: req.body.description,
            headline: req.body.headline,
            long_description: req.body.long_description,
            category: req.body.category,
            keyword: req.body.keyword,
            image: image_filename
        });

        await blog.save();
        res.json({ success: true, message: 'blog Added' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
};


const listBlog = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        res.json({success:true ,data:blogs})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const removeBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.body.id);
        fs.unlink(`upload/${blog.image}`, (err) => {
            if (err) console.log('Error removing file:', err);
        });
        await blogModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Blog removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getBlockById = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id)
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        res.json({ success: true, data: blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export {addBlog, listBlog, removeBlog,getBlockById};