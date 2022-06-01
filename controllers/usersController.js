import asyncHandler from '../middlewares/asyncHandler.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/userModel.js';

export const signup = asyncHandler(async (req, res) => {  // there is access to body hier because of the middleware in index.js -  app.use(express.json());
    const { body: {name, email, password} } = req;
   // console.log(name, email, password);  // use Postman to sent req. and see the outcome in the console.log
   
    if(!name || !email || !password){
        throw new ErrorResponse('Name Email and Password are required', 400)
    }
    const found = await User.findOne({email});  //check if the user exists in the database against email, so no 2 users with same email address allowed
    console.log(`Logging user email ${found}`)
    if(found) throw new ErrorResponse('user already exixts', 403);
    const hash = await bcrypt.hash(password, 10); 
    const {_id, name: userName } = await User.create({ name, email, password: hash}); // it is async , returns a promise and after fulfilling the promise the value f goea into newUser
        // console.log(newUser)
        console.log(process.env.JWT_SECRET)
    const token = jwt.sign({_id, userName}, process.env.JWT_SECRET)
    
    res.json({token})
});


export const signin = asyncHandler(async (req, res) => {
    const { body: { email, password} } = req;
    if(!email || !password){throw new ErrorResponse('Email and Password are required', 400)}
    const { _id, name: userName, password: hash} = await User.findOne({email}).select('+password') || {};  //check if the user exists in the database select used to add password , pull it from DB
    if (!_id) throw new ErrorResponse('User or Password does not exist', 404)
    const match = await bcrypt.compare(password, hash);
    if (!match) throw new ErrorResponse("password is not correct", 401)
    console.log(match);
    const token = jwt.sign({ _id, userName}, process.env.JWT_SECRET)
    res.json({token})
});
export const getme = asyncHandler(async (req, res) => {
    res.send('User / Profile')
});