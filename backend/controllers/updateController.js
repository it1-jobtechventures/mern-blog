import updateModel from "../models/updateModel.js";

 //add food item 
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

export {addUpdate}