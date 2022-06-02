// create a mini API (microservice architecture) taht only does ONE thing
import ErrorResponse from "../utils/errorResponse.js";

export const uploadResponse = (req, res) =>{   //only allow upload picture (validation in imageUploader.js)
    const {file} = req;
    if (!file) throw new  ErrorResponse('Please include a file to upload'); // 400 Bad Request
     
    
    res.send({location: `/${file.filename}`});
};