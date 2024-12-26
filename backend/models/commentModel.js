import mongoose from "mongoose";

// Define the schema for the Comment model
const commentSchema = new mongoose.Schema({
    text: { type: String, required: true, trim: true,},
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'blog'},  // Reference to the Blog model required: true,},
    createdAt: { type: Date, default: Date.now,},
});

const commentModel = mongoose.models.comment || mongoose.model("comment", commentSchema)
export default commentModel;
