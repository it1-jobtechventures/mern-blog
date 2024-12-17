import express from "express";
import { addUpdate, listUpdateLink, removeUpdatedLink } from "../controllers/updateController.js";

const updateRouter = express.Router();

//route to post
updateRouter.post("/addUpdate" ,addUpdate)
updateRouter.get("/allUpdate" ,listUpdateLink)
updateRouter.post('/removeUpdate',removeUpdatedLink)

export default updateRouter;