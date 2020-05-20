import React, { FC, FormEvent, Dispatch, SetStateAction } from "react";
import "./index.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement, Stripe } from "@stripe/stripe-js";
import { CartItem } from "../../common/cart";

interface Props {
  cart: CartItem[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CheckoutForm: FC<Props> = (props) => {
  const { cart, setModalOpen } = props;
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

    if (!error && paymentMethod) {
      console.log(paymentMethod);
      const { id } = paymentMethod;

      const body = {
        id: id,
        amount: 1000,
        cart: cart,
      };

      fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => {
          console.log(response);
          response.json().then((json) => {
            console.log(json);
          });
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout - 20$</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <button
        onClick={() => {
          setModalOpen(false);
        }}
      >
        Close
      </button>
    </form>
  );
};

export default CheckoutForm;
