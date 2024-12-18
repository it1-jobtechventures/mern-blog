
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import updateRouter from './routes/updateRoute.js';
import bannerRouter from './routes/bannerRoute.js';
import galleryRouter from './routes/galleryRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware 
app.use(express.json());
app.use(cors());
// Middleware to parse URL-encoded data (if needed)
app.use(express.urlencoded({ extended: true }));
//db connect
connectDB();

//routes
app.use('/api/user',userRouter)
//mount upload folder to the 'images' endpoint.
app.use('/images',express.static('upload'))
app.use('/api/blog',blogRouter)
app.use('/api/update', updateRouter)
app.use('/api/banner', bannerRouter)
app.use('/api/gallery', galleryRouter)



// request the data for server
app.get('/' , (req , res) => {
    res.send("API Working")
});

// to run express server
app.listen(port , () => {
    console.log(`server started on http://localhost:${port}`)
});

