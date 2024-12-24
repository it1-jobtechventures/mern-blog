import express from "express";
import { addBlog, listBlog, removeBlog ,getBlockById, updateBlog} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.fields([{name:'image' ,maxCount:1}]), addBlog);
blogRouter.get('/list' ,listBlog)
blogRouter.post('/remove' ,removeBlog)
blogRouter.post('/blog/:id' ,getBlockById)
blogRouter.put("/update/:id", upload.single("image"), updateBlog);

export default blogRouter;