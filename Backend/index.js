import express, { json } from 'express';
import cors from 'cors';
import { default as journalRouter } from './routes/journal-router.js';
import { default as mongoose } from 'mongoose';
import 'dotenv';
import userRouter from './routes/user-routes.js';

const app = express();

const port = process.env.PORT || 3500;


app.use(express.json());
app.use(cors());



app.use('/api/journal', journalRouter)
app.use('/api', userRouter)

mongoose
    .connect(MONGO_URI)
    .then(()=>app.listen(port))
    .then(()=> 
    console.log(`connected to ${port}`))
    .catch((err)=> {
        console.log(err)
    })
