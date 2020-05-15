import { Router, Request, Response } from "express";
import { Product } from "../models/product";
import mongoose from "mongoose";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const {
    name,
    price,
    seedCount,
    quantity,
    heat,
    image,
    colorList,
    description,
  } = req.body;

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    price: price,
    seedCount: seedCount,
    quantity: quantity,
    heat: heat,
    image: image,
    colorList: colorList,
    description: description,
  });

  product
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  res.status(201).json({
    message: "Handling post requests to api/products",
    createdProduct: product,
  });
});

export default router;
