import 'dotenv/config.js'; //IIFE
// import pool from "./db/client.js";
import express from "express";
import './db/mongoose.js';
import cors from 'cors';
import usersRouter from './routes/usersRouter.js';
import projectsRouter from './routes/projectsRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/auth', usersRouter);
app.use('/projects', projectsRouter);
app.use('*', (req, res) => res.send("Zaria's Scratch projects API"));
app.use(errorHandler);





app.listen(port, () => console.log( `server is running at http:localhost:${port}` ))