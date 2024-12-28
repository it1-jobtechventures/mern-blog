import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    headline: { type: String },
    image: { type: String, required: true }, 
    keyword: { type: [String], required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category",required:false },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment',  }],// Reference to the Comment model
});

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema)
export default blogModel;


