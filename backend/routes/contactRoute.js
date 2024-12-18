import express from "express";
import { listContact, sentEmail } from "../controllers/contactController.js";

const contactRouter = express.Router();

//route to post
contactRouter.post("/sentEmail" ,sentEmail)
contactRouter.get('/listOfContact', listContact)


export default contactRouter;