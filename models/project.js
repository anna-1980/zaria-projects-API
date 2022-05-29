import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    author: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    date: {type: Date, default: Date.now}
});

export default model ('Project', projectSchema);