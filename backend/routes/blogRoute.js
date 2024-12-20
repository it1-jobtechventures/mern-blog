import express from "express";
//to store image 
import multer from "multer";
import { addBlog, listBlog, removeBlog ,getBlockById} from "../controllers/blogController.js";

const blogRouter = express.Router();

// //image storage engine using multer 
// const storage = multer.diskStorage({
//     destination:'upload',
//     filename:(res,file,cb)=>{
//         // file will be store in upload folder with time stamp
//         return cb(null , `${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({storage:storage})

import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/upload');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });


//post method (if we have to upload file)
//route to post

blogRouter.post("/add", upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 10 }
]), addBlog);

blogRouter.get('/list' ,listBlog)

blogRouter.post('/remove' ,removeBlog)

blogRouter.post('/blog/:id' ,getBlockById)
export default blogRouter;