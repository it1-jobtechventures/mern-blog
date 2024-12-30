import galleryModel from "../models/galleryModel.js";
import fs from 'fs'
import { v2 as cloudinary  } from "cloudinary";

// const addGallery = async (req, res) => {
//     try {
//         if (!req.files || !req.files.image || !req.files.image[0]) {
//             throw new Error('No image uploaded');
//         }
//         const file = req.files.image[0]; 
//         const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
//         const gallery = new galleryModel({
//             image: result.secure_url
//         });

//         await gallery.save();
//         res.json({ success: true, message: 'photo Added' });
//     } catch (error) {
//         console.log(error.message);
//         res.json({ success: false, message: error.message});
//     }
// };

const addGallery = async (req, res) => {
    try {
        if (!req.files || !req.files.media || req.files.media.length === 0) {
            throw new Error('No files uploaded');
        }

        const uploadedFiles = [];

        for (const file of req.files.media) {
            const resourceType = file.mimetype.startsWith('video/') ? 'video' : 'image';
            const result = await cloudinary.uploader.upload(file.path, { resource_type: resourceType });
            uploadedFiles.push({
                media: result.secure_url,
                type: resourceType
            });
            fs.unlinkSync(file.path); // Clean up temp file
        }

        await galleryModel.insertMany(uploadedFiles);

        res.json({ success: true, message: 'Media added successfully' });
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message });
    }
};


const listGallery = async (req, res) => {
    try {
        const gallery = await galleryModel.find({});
        res.json({success:true ,data:gallery})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const removeGallery = async (req, res) => {
    try {
        const gallery = await galleryModel.findById(req.body.id);
        fs.unlink(`upload/${gallery.image}`, (err) => {
            if (err) console.log('Error removing file:', err);
        });
        await galleryModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'photo removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addGallery , listGallery , removeGallery}