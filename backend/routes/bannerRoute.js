import express from "express";
import { addBanner, listBanner, removeBanner } from "../controllers/bannerController.js";
import upload from "../middleware/multer.js";

const bannerRouter = express.Router();

bannerRouter.post("/addBanner",upload.fields([{name:'image', maxCount:1}]), addBanner);
bannerRouter.get("/listBanner", listBanner);
bannerRouter.post("/removeBanner", removeBanner);

export default bannerRouter;
