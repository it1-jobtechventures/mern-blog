import express from "express";
import { addUpdate } from "../controllers/updateController.js";

const updateRouter = express.Router();

//route to post
updateRouter.post("/addUpdate" ,addUpdate)

export default updateRouter;