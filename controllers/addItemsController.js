// controllers/addItemsController.js
import jwt from 'jsonwebtoken';
import { carModel } from "../modules/carModel.js";
//import { secretkey } from '../config'; 
export const secretkey= "auto";

const addItemsController = async (req, res) => {
  jwt.verify(req.token, secretkey, async (err, auth) => {
    if (auth) {
      console.log("added");
    }else{
return res.status(401).json({ message: 'Invalid Token' });
    }
    try {
      const { name, description, price, admprice, image } = req.body;

      const newItem = new carModel({
        name,
        description,
        price,
        admprice,
        image,
      });

      console.log("Added successfully");
      const result = await newItem.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

export default addItemsController;

