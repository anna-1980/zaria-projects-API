import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    url:{type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

export default model ('Project', projectSchema);