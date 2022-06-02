import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import imageUploader from '../middlewares/imageUploader.js';
 

const uploadRouter = Router();

uploadRouter.post('/', verifyToken, imageUploader.single('profile_pic'), (req, res) =>{   //only allow upload picture (validation in imageUploader.js)
    const {file} = req
    if (!file) {
      return res.status(400).json({error :'Please include a file to upload'}); // 400 Bad Request
    }
    
    res.send({location: `/${file.filename}`});
});    

export default uploadRouter;