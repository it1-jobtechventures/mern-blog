import express from "express";
import { addGallery, listGallery, removeGallery } from "../controllers/galleryController.js";
import upload from "../middleware/multer.js";


const galleryRouter = express.Router();

// galleryRouter.post("/addPhoto" ,upload.fields([{name:'image', maxCount:1}]), addGallery)
galleryRouter.post(
    "/addMedia",
    upload.fields([{ name: 'media', maxCount: 10 }]), // Allow multiple files
    addGallery
);
galleryRouter.get("/listPhoto" , listGallery)
galleryRouter.post("/removePhoto" ,removeGallery)

export default galleryRouter;
