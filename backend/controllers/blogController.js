import blogModel from '../models/blogModel.js';
import fs from 'fs'

 //add food item 
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


// all food list
const listBlog = async (req, res) => {
    //logic to access all food list and send them as a response
    try {
        //in this variable we will get all the data of the food items
        const blogs = await blogModelModel.find({});
        res.json({success:true ,data:blogs})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

// Remove food item
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

export {addBlog, listBlog, removeBlog};