import galleryModel from "../models/galleryModel.js";
import fs from 'fs'

const addGallery = async (req, res) => {
    try {
        let image_filename = req.file.filename;

        const gallery = new galleryModel({
            image: image_filename
        });

        await gallery.save();
        res.json({ success: true, message: 'photo Added' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message});
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