import mongoose from "mongoose";

const signUpStructure = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

const SignUpModel = mongoose.model('SignUp', signUpStructure);

export default SignUpModel;
