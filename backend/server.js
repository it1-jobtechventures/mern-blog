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
import adminModel from './models/adminModel.js';
import bcrypt from 'bcryptjs'
import adminRouter from './routes/adminRoutes.js';

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

// Check and Create Default Admin
const createDefaultAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error('Admin credentials are missing in .env file');
      return;
    }

    const existingAdmin = await adminModel.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const admin = new adminModel({
        name: 'Default Admin',
        email: adminEmail,
        password: hashedPassword,
      });
      await admin.save();
      console.log('Default admin created successfully!');
    } else {
      console.log('Admin already exists.');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

// Call the function on server startup
createDefaultAdmin();



// Routes
app.use('/api/user', userRouter);
app.use('/images/banners', express.static('upload/banners'));
app.use('/images/blogs', express.static('upload/blogs'));
app.use('/api/admin' , adminRouter)
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
