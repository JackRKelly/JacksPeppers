import { Router, Request, Response } from "express";
import { NotificationType } from "../models/common";
import { CartItem } from "../models/common";
import { Product } from "../models/product";

const stripe = require("stripe")(process.env.STRIPE_SEC);
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { cart, id, amount } = req.body;

  console.log(cart);

  let totalPrice = 0;

  let cartString = "";
  cart.map(
    (cart: CartItem) => (cartString += `${cart.quantity} x ${cart.id} | `)
  );

  try {
    const payment = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "USD",
      description: cartString,
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    res.status(200).json({
      type: NotificationType.success,
      message: "Your payment will be processed momentarily.",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ type: NotificationType.error, message: error.message });
  }
});

export default router;
