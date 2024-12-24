import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    image:{type:String,required:true},
    date: { type: Date, default: Date.now }
})

const galleryModel = mongoose.models.gallery || mongoose.model("gallery", gallerySchema)
export default galleryModel;

// import mongoose from "mongoose";

// const gallerySchema = new mongoose.Schema({
//     url: { type: String,  }, // Changed 'image' to 'url' for clarity
//     type: { type: String,  enum: ['image', 'video'] }, // Media type field
//     date: { type: Date, default: Date.now },
// });

// const galleryModel = mongoose.models.gallery || mongoose.model("gallery", gallerySchema);
// export default galleryModel;

