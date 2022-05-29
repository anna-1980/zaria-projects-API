import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';

export const signup = asyncHandler(async (req, res) => {
    res.send('Sign Up')
});
export const signin = asyncHandler(async (req, res) => {
    res.send('Sign In')
});
export const getme = asyncHandler(async (req, res) => {
    res.send('User / Profile')
});