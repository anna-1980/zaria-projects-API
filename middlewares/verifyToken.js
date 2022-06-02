import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import User from '../models/userModel.js';

const verifyToken = asyncHandler(async (req, res, next) => {
    const {
      headers: { authorization }
    } = req;
    if (!authorization) throw new ErrorResponse('Please log in', 401);
    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);  // destructured because we only need an id
    const user = await User.findById(_id);
    if (!user) throw new ErrorResponse('User does not exist', 404);
    req.user = user;
    next();
  });
  
  export default verifyToken;








// const verifyToken = asyncHandler(async (req, res, next) => {
//   const {
//     headers: { authorization }
//   } = req;
//   jwt.verify(authorization, process.env.JWT_SECRET, (err, user) => {
//       if (err) {
//           return res.sendStatus(401);
//       }
//       req.user = user;
//       next();
//   })
  
// });

// export default verifyToken;