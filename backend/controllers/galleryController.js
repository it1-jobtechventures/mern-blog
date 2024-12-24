import galleryModel from "../models/galleryModel.js";
import fs from 'fs'
import { v2 as cloudinary  } from "cloudinary";

const addGallery = async (req, res) => {
    try {
        if (!req.files || !req.files.image || !req.files.image[0]) {
            throw new Error('No image uploaded');
        }
        const file = req.files.image[0]; 
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
        const gallery = new galleryModel({
            image: result.secure_url
        });

        await gallery.save();
        res.json({ success: true, message: 'photo Added' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
};

// const addGallery = async (req, res) => {
//     try {
//         if (!req.files || (!req.files.images && !req.files.videos)) {
//             throw new Error('No files uploaded');
//         }

//         const uploadedFiles = [];
//         const processUpload = async (file, type) => {
//             const result = await cloudinary.uploader.upload(file.path, { resource_type: type });
//             uploadedFiles.push({ url: result.secure_url, type });
//         };

//         if (req.files.images) {
//             for (const image of req.files.images) {
//                 await processUpload(image, "image");
//             }
//         }

//         if (req.files.videos) {
//             for (const video of req.files.videos) {
//                 await processUpload(video, "video");
//             }
//         }

//         const gallery = new galleryModel({ files: uploadedFiles });
//         await gallery.save();

//         res.json({ success: true, message: 'Files uploaded successfully', data: gallery });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

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