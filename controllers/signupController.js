import bcrypt from "bcrypt";
import { userModel } from '../modules/User.js';
import Jwt from 'jsonwebtoken';

const signUpController = async (req, res) => {
  try {
    const Name = req.body.Name;
    const Email = req.body.email;
    const Password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    const existingUser = await userModel.findOne({ email: Email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const newUser = new userModel({
      Name: Name,
      email: Email,
      password: hashedPassword,
    });

    await newUser.save();
    
    const token=Jwt.sign({newUser},"Privatekey")
        
        
    res.header({ newUser,auth:token , success: true, message: 'SignUp successful' });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default signUpController;
