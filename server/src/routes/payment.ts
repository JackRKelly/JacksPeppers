import { Router, Request, Response } from "express";
import { NotificationType } from "../models/common";

const stripe = require("stripe")(process.env.STRIPE_SEC);
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { cart, id, amount } = req.body;

  console.log(cart);

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Pepper seeds. Jacks Peppers",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    res.status(200).json({
      type: NotificationType.success,
      message: "Your payment will be processed momentarilty.",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ type: NotificationType.error, message: error.message });
  }
});

export default router;
