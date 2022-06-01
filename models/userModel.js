import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    password: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    createdAt: {type: Date, default: Date.now}, 
});

export default model ('User', userSchema);