import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.js';
 

const uploadRouter = Router();

uploadRouter.post('/', signup);

export default uploadRouter;