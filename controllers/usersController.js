import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/userModel.js';

export const signup = asyncHandler(async (req, res) => {  // there is access to body hier because of the middleware in index.js -  app.use(express.json());
    const { body: {name, email, password} } = req;
    console.log(name, email, password);  // use Postman to sent req. and see the outcome in the console.log

    res.send('Sign Up')
});
export const signin = asyncHandler(async (req, res) => {
    res.send('Sign In')
});
export const getme = asyncHandler(async (req, res) => {
    res.send('User / Profile')
});