import React, { FC } from "react";
import "./index.scss";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm: FC = () => {
  const stripe = useStripe();

  return (
    <form className="checkout-form">
      <h2>Checkout - 20$</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
