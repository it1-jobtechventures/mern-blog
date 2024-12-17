import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    link:{type:String,required:true},
    image:{type:String,required:true},
    date: { type: Date, default: Date.now }
})

const bannerModel = mongoose.models.banner || mongoose.model("banner", bannerSchema)
export default bannerModel;