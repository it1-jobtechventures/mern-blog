import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    headline: { type: String, required: true },
    // description: { type: String, required: true },
    long_description: { type: String, required: true },
    image: { type: String, required: true }, 
    images: { type: [String]},
    keyword: { type: [String], required: true },
    category: { type: String },
    date: { type: Date, default: Date.now }
});

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)
export default blogModel;


