// addItemsRoutes.js
import express from "express";
import addItemsController from "../controllers/addItemsController.js";
import multer from "multer";
import path from "path";
import { verifytoken } from '../verifytoken.js'

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post("/add-item",verifytoken, upload.single("image"), addItemsController);

export default router;
