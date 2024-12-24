import express from "express";
import { addGallery, listGallery, removeGallery } from "../controllers/galleryController.js";
import upload from "../middleware/multer.js";


const galleryRouter = express.Router();

galleryRouter.post("/addPhoto" ,upload.fields([{name:'image', maxCount:1}]), addGallery)
galleryRouter.get("/listPhoto" , listGallery)
galleryRouter.post("/removePhoto" ,removeGallery)

export default galleryRouter;

// import express from "express";
// import upload from "../middleware/multer.js";
// import { addGallery, listGallery, removeGallery } from "../controllers/galleryController.js";

// const galleryRouter = express.Router();

// galleryRouter.post(
//     "/addFiles",
//     upload.fields([
//         { name: 'images', maxCount: 5 }, // Allow up to 5 images
//         { name: 'videos', maxCount: 3 }, // Allow up to 3 videos
//     ]),
//     addGallery
// );
// galleryRouter.get("/listPhoto" , listGallery)
// galleryRouter.post("/removePhoto" ,removeGallery)

// export default galleryRouter;
