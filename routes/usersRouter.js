import { Router } from 'express';
import { getme, signin, signup } from '../controllers/usersController.js';
import verifyToken from '../middlewares/verifyToken.js';
 

const usersRouter = Router();

usersRouter.post('/signup', signup) //seperate requests because the bodies of the req. are slightly different
usersRouter.post('/signin', signin)
usersRouter.get('/me',verifyToken, getme)  //protected route

export default usersRouter;
