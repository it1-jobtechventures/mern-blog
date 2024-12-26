import express from "express";
import { addBlog, listBlog, removeBlog ,getBlockById, updateBlog} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import {  addComment, getComments, likeBlog } from "../controllers/likeCommentController.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.fields([{name:'image' ,maxCount:1}]), addBlog);
blogRouter.get('/list' ,listBlog)
blogRouter.post('/remove' ,removeBlog)
blogRouter.post('/blog/:id' ,getBlockById)
blogRouter.put("/update/:id", upload.single("image"), updateBlog);
blogRouter.post("/like/:id", likeBlog); // Like a blog
blogRouter.post('/comment/:id', addComment);// Add a comment to a blog post
blogRouter.get('/comments/:id', getComments);// Get comments for a specific blog post

export default blogRouter;