import bannerModel from "../models/bannerModel.js";
import { v2 as cloudinary  } from "cloudinary";

const addBanner = async (req, res) => {
    try {
        if (!req.files || !req.files.image || !req.files.image[0]) {
            throw new Error('No image uploaded');
        }
        const file = req.files.image[0]; 
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
        const banner = new bannerModel({
            link: req.body.link,
            image: result.secure_url, 
        });
        await banner.save();
        res.json({ success: true, message: "Banner added successfully!", imageUrl: result.secure_url });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

const listBanner = async (req, res) => {
    try {
        const banners = await bannerModel.find({});
        res.json({ success: true, data: banners });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

const removeBanner = async (req, res) => {
    try {
        const banner = await bannerModel.findById(req.body.id);
        const imageUrl = banner.image;

        // Extract public ID from the Cloudinary URL to delete the image
        const publicId = imageUrl.split('/').pop().split('.')[0];

        // Delete image from Cloudinary
        await cloudinary.v2.uploader.destroy(publicId);

        await bannerModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Banner removed successfully!" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addBanner, listBanner, removeBanner };
