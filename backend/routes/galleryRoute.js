import express from "express";
//to store image 
import multer from "multer";
import { addGallery, listGallery, removeGallery } from "../controllers/galleryController.js";


const galleryRouter = express.Router();

//image storage engine using multer 
const storage = multer.diskStorage({
    destination:'upload',
    filename:(res,file,cb)=>{
        // file will be store in upload folder with time stamp
        return cb(null , `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

galleryRouter.post("/addPhoto" ,upload.single("image"), addGallery)
galleryRouter.get("/listPhoto" , listGallery)
galleryRouter.post("/removePhoto" ,removeGallery)

export default galleryRouter;