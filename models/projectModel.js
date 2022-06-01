import mongoose from "mongoose";
import User from './userModel.js'

//  const ObjectId = mongoose.Schema.Types.ObjectId;
 
const { Schema, model } = mongoose;
console.log('------START-----projectModel-')
const projectSchema = new Schema({
   
    title: {type: String, required: true},
    description: {type: String, required: false},
    url:{type: String, required: true},
    author:  {type:  Schema.Types.ObjectId, ref: 'User' },
    date: {type: Date, default: Date.now}
});

// console.log(ObjectId)
console.log('------END-----projectModel--')
export default model ('Project', projectSchema);

