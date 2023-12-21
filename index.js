import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import addItemRoute from './Routes/addItemRoute.js';
import getItemsRoute from './Routes/getItemsRoute.js';
import deleteItemsRoute from './Routes/deleteItemsRoute.js';
import updateItemsRoute from './Routes/updateItemsRoute.js';
import signupRoute from './Routes/signupRoute.js';
import loged from './Routes/loged.js'
const app = express();
const port = "https://backend-roan-ten.vercel.app";

app.use(express.json());
app.use(bodyParser.json());
app.use(cors(
    {
        source:"*",
        methods:["GET","POST","PUT","UPDATE","DELETE"],
    }

));

mongoose.connect('mongodb+srv://husnaink467:5262@cluster0.ghk3bf3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/',addItemRoute);
app.use('/',getItemsRoute);
app.use('/',deleteItemsRoute);
app.use('/',updateItemsRoute);
app.use('/', signupRoute);
app.use('/',loged);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
