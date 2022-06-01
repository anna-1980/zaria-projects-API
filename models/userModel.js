import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    
    name: {type: String, required: true},
    email: {type: String, required: false},
    password: {type: String, required: true, select: false},  //select: false so that it is not selected for the response and send accidentally
    createdAt: {type: Date, default: Date.now}, 
});

export default model ('User', userSchema);