import { Router } from 'express';
import { getme, signin, signup } from '../controllers/usersController.js';
import verifyToken from '../middlewares/verifyToken.js';
 

const usersRouter = Router();

usersRouter.post('/signup', signup)
usersRouter.post('/signin', signin)
usersRouter.get('/me',verifyToken, getme)

export default usersRouter;
