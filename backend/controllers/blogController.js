import blogModel from '../models/blogModel.js';
import { v2 as cloudinary  } from "cloudinary";

const addBlog = async (req, res) => {
    try {
        if (!req.files || !req.files.image || !req.files.image[0]) {
            throw new Error("No image uploaded");
        }

        const file = req.files.image[0]; // Access the first uploaded image
        const result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });

        const blog = new blogModel({
            title: req.body.title,
            headline: req.body.headline,
            content: req.body.content,
            category: req.body.category,
            keyword: req.body.keyword.split(","),
            image: result.secure_url,
        });

        await blog.save();
        res.json({ success: true, message: "Blog Added" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, message: error.message });
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
;

const removeBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.body.id);
        if (!blog) {
            throw new Error("Blog not found");
        }

        const imageUrl = blog.image;
        if (imageUrl) {
            // Extract public ID from the Cloudinary URL to delete the image
            const publicId = imageUrl.split('/').pop().split('.')[0];
            
            // Delete image from Cloudinary
            await cloudinary.uploader.destroy(publicId);
        }

        await blogModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Blog removed" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};


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

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        // Update fields
        blog.title = req.body.title || blog.title;
        blog.headline = req.body.headline || blog.headline;
        blog.content = req.body.content || blog.content;
        blog.category = req.body.category || blog.category;
        blog.keyword = req.body.keyword ? req.body.keyword.split(",") : blog.keyword;

        // Handle image replacement if a new file is uploaded
        if (req.file) {
            // Delete the existing image from Cloudinary
            if (blog.image) {
                const publicId = blog.image.split("/").pop().split(".")[0]; // Extract public ID
                await cloudinary.uploader.destroy(publicId);
            }

            // Upload the new image to Cloudinary
            const file = req.file; // Uploaded file from multer
            const result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });

            // Assign the new image URL to the blog
            blog.image = result.secure_url;

            // Optionally remove the file from local storage after upload
            // fs.unlinkSync(file.path);
        }

        await blog.save();
        res.json({ success: true, message: "Blog updated successfully" });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export {addBlog, listBlog, removeBlog,getBlockById,updateBlog};