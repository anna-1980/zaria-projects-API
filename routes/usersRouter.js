import { Router } from 'express';
import { getme, signin, signup } from '../controllers/usersController.js';
 

const usersRouter = Router();

usersRouter.post('/signup', signup)
usersRouter.post('/signin', signin)
usersRouter.get('/me', getme)

export default usersRouter;
