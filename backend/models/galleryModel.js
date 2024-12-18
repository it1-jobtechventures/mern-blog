import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    image:{type:String,required:true},
    date: { type: Date, default: Date.now }
})

const galleryModel = mongoose.models.gallery || mongoose.model("gallery", gallerySchema)
export default galleryModel;