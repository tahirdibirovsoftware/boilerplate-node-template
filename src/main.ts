import express, { Request, Response } from 'express';
import { router as userRouter } from './routes/user.route';
import { configDotenv } from 'dotenv';
import { bootstrap } from './config/server.config';
import mongoose from 'mongoose';
configDotenv();

const app = express();
app.use(express.json());
app.use('user', userRouter);
app.get('/', (req: Request, res: Response) => { res.status(200).json({ API: "V1" }) })
bootstrap(mongoose, app);