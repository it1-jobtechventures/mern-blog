import updateModel from "../models/updateModel.js";

 const addUpdate = async (req, res) => {
    try {
        const update = new updateModel({
            title: req.body.title,
            link: req.body.link,
        });
        await update.save();
        res.json({ success: true, message: 'link Added' });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message});
    }
};

const listUpdateLink = async (req, res) => {
    try {
        const updateLink = await updateModel.find({});
        res.json({success:true ,data:updateLink})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const removeUpdatedLink = async (req, res) => {
    try {
        const updateLink = await updateModel.findById(req.body.id);
        await updateModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: ' removed updated link' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addUpdate, listUpdateLink,removeUpdatedLink}