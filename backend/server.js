
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware 
app.use(express.json());
app.use(cors());

//db connect
connectDB();

//routes
app.use('/api/user',userRouter)

// request the data for server
app.get('/' , (req , res) => {
    res.send("API Working")
});

// to run express server
app.listen(port , () => {
    console.log(`server started on http://localhost:${port}`)
});

