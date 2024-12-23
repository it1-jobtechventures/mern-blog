// import express from "express";
// //to store image 
// import multer from "multer";
// import { addBanner, listBanner, removeBanner } from "../controllers/bannerController.js";

// const bannerRouter = express.Router();

// //image storage engine using multer 
// const storage = multer.diskStorage({
//     destination:'upload',
//     filename:(res,file,cb)=>{
//         // file will be store in upload folder with time stamp
//         return cb(null , `${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({storage:storage})


// bannerRouter.post("/addBanner" ,upload.single("image"), addBanner)

// bannerRouter.get('/listBanner' ,listBanner)

// bannerRouter.post('/removeBanner' ,removeBanner)

// export default bannerRouter;

import express from "express";
import multer from "multer";
import { addBanner, listBanner, removeBanner } from "../controllers/bannerController.js";

const bannerRouter = express.Router();

// Create a dedicated folder for banners under "upload/banners"
const storage = multer.diskStorage({
    destination: "upload/banners",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

bannerRouter.post("/addBanner", upload.single("image"), addBanner);
bannerRouter.get("/listBanner", listBanner);
bannerRouter.post("/removeBanner", removeBanner);

export default bannerRouter;
