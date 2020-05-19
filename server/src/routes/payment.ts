import { Router, Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/product";
import { v4 as uuidv4 } from "uuid";
const stripe = require("stripe")(process.env.stripe_sec);

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { cart, token } = req.body;

  console.log(cart);
  console.log(token);

  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer: any) => {
      stripe.charges.create(
        {
          amount: 0,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: "product name",
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result: any) => res.status(200).json(result))
    .catch((err: any) => console.error(err));
});

export default router;
