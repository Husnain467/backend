import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: String,
    email: String, 
    password: String ,
});

export const userModel = mongoose.model("user", userSchema); // Change the export name to userModel
