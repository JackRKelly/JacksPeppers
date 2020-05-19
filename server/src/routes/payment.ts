import { Router, Request, Response } from "express";
import { Product } from "../models/product";
import mongoose from "mongoose";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.body);
});

export default router;
