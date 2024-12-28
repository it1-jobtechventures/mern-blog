import categoryModel from "../models/categoryModel.js"

const addCategory = async (req,res) => {
    try {
        const {name} = req.body;
        const category = new categoryModel({name})
        await category.save();
        res.json({ success: true, message: "Category added successfully", data: category });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });   
    }
}

const allCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.json({ success: true, data: categories });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const removeCategory = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.body.id);
        await categoryModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: ' removed category' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addCategory , allCategories ,removeCategory}