import fs from 'fs'
import bannerModel from '../models/bannerModel.js';

const addBanner = async (req, res) => {
    try {
        let image_filename = req.file.filename;

        const banner = new bannerModel({
            link: req.body.link,
            image: image_filename
        });

        await banner.save();
        res.json({ success: true, message: 'banner Added' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
};

const listBanner = async (req, res) => {
    try {
        const banner = await bannerModel.find({});
        res.json({success:true ,data:banner})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const removeBanner = async (req, res) => {
    try {
        const banner = await bannerModel.findById(req.body.id);
        fs.unlink(`upload/${banner.image}`, (err) => {
            if (err) console.log('Error removing file:', err);
        });
        await bannerModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'banner removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addBanner , listBanner, removeBanner}