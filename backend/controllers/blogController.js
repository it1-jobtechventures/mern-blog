import blogModel from '../models/blogModel.js';
import fs from 'fs'

const addBlog = async (req, res) => {
    try {
        let mainImageFilename = req.files['image'][0].filename;
        let imagesFilenames = req.files['images'] ? req.files['images'].map(file => file.filename) : [];

        const blog = new blogModel({
            title: req.body.title,
            description: req.body.description,
            headline: req.body.headline,
            long_description: req.body.long_description,
            category: req.body.category,
            keyword: req.body.keyword.split(','),
            image: mainImageFilename,
            images: imagesFilenames
        });

        await blog.save();
        res.json({ success: true, message: 'Blog Added' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
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
// const removeBlog = async (req, res) => {
//     try {
//         const blog = await blogModel.findById(req.body.id);
//         if (!blog) {
//             return res.json({ success: false, message: 'Blog not found' });
//         }

//         const imagePath = `upload/${blog.image}`;
//         if (fs.existsSync(imagePath)) {
//             fs.unlink(imagePath, (err) => {
//                 if (err) console.log('Error removing file:', err);
//             });
//         } else {
//             console.log('File does not exist:', imagePath);
//         }

//         await blogModel.findByIdAndDelete(req.body.id);
//         res.json({ success: true, message: 'Blog removed' });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

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

// const getBlockById = async (req, res) => {
//     try {
//         const blog = await blogModel.findById(req.params.id);
//         if (!blog) {
//             return res.status(404).json({ success: false, message: 'Blog not found' });
//         }

//         // Check for main image existence
//         const mainImagePath = `upload/${blog.image}`;
//         if (!fs.existsSync(mainImagePath)) {
//             console.log('Main image file does not exist:', mainImagePath);
//             blog.image = null; // Optionally set to null if not found
//         }

//         res.json({ success: true, data: blog });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };


export {addBlog, listBlog, removeBlog,getBlockById};