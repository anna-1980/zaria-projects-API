import asyncHandler from '../middlewares/asyncHandler.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/userModel.js';

export const signup = asyncHandler(async (req, res) => {  // there is access to body hier because of the middleware in index.js -  app.use(express.json());
    const { body: {name, email, password} } = req;
   // console.log(name, email, password);  // use Postman to sent req. and see the outcome in the console.log
   
    const found = await User.findOne({email});
    console.log(`Logging user email ${found}`)
    
    if(found) throw new ErrorResponse('user already exixts', 403);
    
    const hash = await bcrypt.hash(password, 10); 
    const newUser = await User.create({ name, email, password: hash}); // it is async , returns a promise and after fulfilling the promise the value f goea into newUser
        // console.log(newUser)
        console.log(process.env.JWT_SECRET)
    const token = jwt.sign(newUser, process.env.JWT_SECRET)
    
    res.json({token})
});
export const signin = asyncHandler(async (req, res) => {
    res.send('Sign In')
});
export const getme = asyncHandler(async (req, res) => {
    res.send('User / Profile')
});