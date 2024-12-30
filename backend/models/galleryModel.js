import mongoose from "mongoose";

// const gallerySchema = new mongoose.Schema({
//     image:{type:String,required:true},
//     date: { type: Date, default: Date.now }
// })

// const galleryModel = mongoose.models.gallery || mongoose.model("gallery", gallerySchema)
// export default galleryModel;

const gallerySchema = new mongoose.Schema({
    media: { type: String, required: true }, // Store the URL (image/video)
    type: { type: String, required: true }, // Store the type of file (e.g., "image" or "video")
    date: { type: Date, default: Date.now }
});

const galleryModel = mongoose.models.gallery || mongoose.model("gallery", gallerySchema);
export default galleryModel;


