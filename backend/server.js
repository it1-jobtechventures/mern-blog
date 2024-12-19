
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import updateRouter from './routes/updateRoute.js';
import bannerRouter from './routes/bannerRoute.js';
import galleryRouter from './routes/galleryRoute.js';
import contactRouter from './routes/contactRoute.js';
import bcrypt from 'bcryptjs';

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


// // Check and Create Default Admin
// const createDefaultAdmin = async () => {
//     try {
//       const adminEmail = process.env.ADMIN_EMAIL;
//       const adminPassword = process.env.ADMIN_PASSWORD;
  
//       if (!adminEmail || !adminPassword) {
//         console.error('Admin credentials are missing in .env file');
//         return;
//       }
  
//       const existingAdmin = await adminModel.findOne({ email: adminEmail });
//       if (!existingAdmin) {
//         const hashedPassword = await bcrypt.hash(adminPassword, 10);
//         const admin = new adminModel({
//           name: 'Default Admin',
//           email: adminEmail,
//           password: hashedPassword,
//         });
//         await admin.save();
//         console.log('Default admin created successfully!');
//       } else {
//         console.log('Admin already exists.');
//       }
//     } catch (error) {
//       console.error('Error creating default admin:', error);
//     }
//   };
  
//   // Call the function on server startup
//   createDefaultAdmin()


//routes
app.use('/api/user',userRouter)
//mount upload folder to the 'images' endpoint.
app.use('/images',express.static('upload'))
app.use('/api/blog',blogRouter)
app.use('/api/update', updateRouter)
app.use('/api/banner', bannerRouter)
app.use('/api/gallery', galleryRouter)
app.use('/api/contact', contactRouter)

// request the data for server
app.get('/' , (req , res) => {
    res.send("API Working")
});

// to run express server
app.listen(port , () => {
    console.log(`server started on http://localhost:${port}`)
});

