import { Router, Request, Response } from "express";
import { NotificationType } from "../models/common";
import { CartItemFinal, ProductResponse } from "../models/common";
import { Product } from "../models/product";

const stripe = require("stripe")(process.env.STRIPE_SEC);
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { cart, id, email, name, address, zipCode, state, city } = req.body;

  let cartFinal: CartItemFinal[] = [];

  for (let i = 0; i < cart.length; i++) {
    Product.findById(cart[i].id)
      .exec()
      .then(async (doc: unknown) => {
        cartFinal.push({
          id: cart[i].id,
          price: (doc as ProductResponse).price * 100,
          quantity: cart[i].quantity,
          name: (doc as ProductResponse).name,
        });

        if (i + 1 === cart.length) {
          let cartDescription = "";
          let cartPrice = 0;
          cartFinal.map((cart) => {
            cartDescription += `| ${cart.name}($${cart.price / 100}) x ${
              cart.quantity
            } |`;
            cartPrice += cart.price * cart.quantity;
          });

          try {
            const payment = await stripe.paymentIntents.create({
              amount: cartPrice < 1000 ? cartPrice + 50 : cartPrice,
              currency: "USD",
              description: cartDescription,
              payment_method: id,
              confirm: true,
              receipt_email: email,
              shipping: {
                name: name,
                address: {
                  line1: address,
                  country: "US",
                  city: city,
                  state: state,
                  postal_code: zipCode,
                },
              },
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
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

export default router;
