
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import { userModel } from '../modules/User.js';
import {secretkey} from './addItemsController.js'

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token=Jwt.sign({user},secretkey)
        
        
        res.send({ user,auth:token , success: true, message: 'Login successful' })
        console.log("log in");
        
      } 
      
      else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default loginController;
