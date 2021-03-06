import { Router, Request, Response } from "express";
import { Product } from "../models/product";
import mongoose from "mongoose";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  Product.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

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
      if (result) {
        res.status(201).json({ result });
      } else {
        res.status(404).json({ message: "No entries found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  Product.findById(id)
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const props = req.body;

  Product.update({ _id: id }, props)
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

export default router;
