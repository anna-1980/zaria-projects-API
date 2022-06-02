import 'dotenv/config.js'; //IIFE
// import pool from "./db/client.js";
import express from "express";
import jwt from "jsonwebtoken";
import verifyToken from './middlewares/verifyToken.js';
import './db/mongoose.js';
import cors from 'cors';
import usersRouter from './routes/usersRouter.js';
import projectsRouter from './routes/projectsRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 5000

app.use(express.json()); // takes raw data from the body of the original req. and parse it into JSON and make it available in the body of the request so we can use it
app.use(cors({ origin: '*' }));

app.get('/profile', verifyToken, (req, res) => {
    const token = jwt.sign({name: 'Anna'}, process.env.JWT_SECRET);
    const { user: {name}} = req;
    res.send(`welcome user ${name}`)
});

//main resource endpoints
app.use('/api/auth', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('*', (req, res) => res.send("Zaria's Scratch projects API"));
app.use(errorHandler);





app.listen(port, () => console.log( `server is running at http:localhost:${port}` ))