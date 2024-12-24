import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    headline: { type: String },
    image: { type: String, required: true }, 
    keyword: { type: [String], required: true },
    category: { type: String },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)
export default blogModel;


