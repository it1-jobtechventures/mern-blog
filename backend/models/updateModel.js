import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
    title:{type:String,required:true},
    link:{type:String , required:true},
    date: { type: Date, default: Date.now }
})

const updateModel = mongoose.models.updateLink || mongoose.model("updateLink", updateSchema)
export default updateModel;