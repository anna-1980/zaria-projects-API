import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/userModel.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  const {
    headers: { authorization }
  } = req;
  jwt.verify(authorization, process.env.JWT_SECRET, (err, user) => {
      if (err) {
          return res.sendStatus(401);
      }
      req.user = user;
      next();
  })
  
});

export default verifyToken;