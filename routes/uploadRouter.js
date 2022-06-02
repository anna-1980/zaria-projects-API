import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import imageUploader from '../middlewares/imageUploader.js';
import {uploadResponse}   from '../controllers/uploadController.js';

const uploadRouter = Router();

uploadRouter.post('/', verifyToken, imageUploader.single('profile_pic'), uploadResponse);    

export default uploadRouter;