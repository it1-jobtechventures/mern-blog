import express from "express";
//to store image 
import multer from "multer";
import { addBlog, listBlog, removeBlog ,getBlockById} from "../controllers/blogController.js";

const blogRouter = express.Router();

//image storage engine using multer 
const storage = multer.diskStorage({
    destination:'upload',
    filename:(res,file,cb)=>{
        // file will be store in upload folder with time stamp
        return cb(null , `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//post method (if we have to upload file)
//route to post
blogRouter.post("/add" ,upload.single("image"), addBlog)
//route to get list of food
blogRouter.get('/list' ,listBlog)
//route to remove food from food list
blogRouter.post('/remove' ,removeBlog)

blogRouter.post('/blog/:id' ,getBlockById)
export default blogRouter;