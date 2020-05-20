import React, { FC, FormEvent, Dispatch, SetStateAction } from "react";
import "./index.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement, Stripe } from "@stripe/stripe-js";
import { CartItem } from "../../common/cart";
import {
  NotificationType,
  addNotificationItem,
  NotificationItem,
} from "../../common/notification";

interface Props {
  cart: CartItem[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const CheckoutForm: FC<Props> = (props) => {
  const { cart, setModalOpen, setNotification, setIsLoading } = props;
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
      const { id } = paymentMethod;

      const body = {
        id: id,
        amount: 1000,
        cart: cart,
      };

      setIsLoading(true);

      fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => {
          response.json().then((json) => {
            setTimeout(() => {
              setIsLoading(false);
            }, 100);
            switch (json.type) {
              case NotificationType.success:
                addNotificationItem(setNotification, {
                  type: NotificationType.success,
                  text: json.message,
                });
                setModalOpen(false);
                break;
              case NotificationType.warning:
                addNotificationItem(setNotification, {
                  type: NotificationType.warning,
                  text: json.message,
                });
                break;
              default:
                addNotificationItem(setNotification, {
                  type: NotificationType.error,
                  text: json.message,
                });
                break;
            }
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
        type="button"
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
