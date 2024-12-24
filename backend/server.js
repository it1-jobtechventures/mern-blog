import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import 'dotenv/config';  // Ensure dotenv is loaded to read .env file
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import updateRouter from './routes/updateRoute.js';
import bannerRouter from './routes/bannerRoute.js';
import galleryRouter from './routes/galleryRoute.js';
import contactRouter from './routes/contactRoute.js';
import connectCloudinary from './config/cloudinary.js';

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// DB connection
connectDB();

// connect cloudinary
connectCloudinary()

// Routes
app.use('/api/user', userRouter);
app.use('/images/banners', express.static('upload/banners'));
app.use('/images/blogs', express.static('upload/blogs'));

app.use('/api/blog', blogRouter);
app.use('/api/update', updateRouter);
app.use('/api/banner', bannerRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/contact', contactRouter);

// Health check route
app.get('/', (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
