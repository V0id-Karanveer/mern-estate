import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import bodyParser from 'body-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((error) => {
    console.log('Error:', error);
    });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter);

