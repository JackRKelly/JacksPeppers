import React, { FC, FormEvent } from "react";
import "./index.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement, Stripe } from "@stripe/stripe-js";

const CheckoutForm: FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const {
      error,
      paymentMethod,
    } = await (stripe as Stripe).createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement) as StripeCardElement,
    });

    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout - 20$</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
