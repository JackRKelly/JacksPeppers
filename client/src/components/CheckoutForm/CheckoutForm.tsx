import React, {
  FC,
  FormEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./index.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement, Stripe } from "@stripe/stripe-js";
import { CartItem, getTotalPrice } from "../../common/cart";
import CheckoutInput from "../CheckoutInput/CheckoutInput";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
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
        cart: cart,
        email: email,
        address: address,
        zipCode: zipCode,
        city: city,
        state: state,
        name: name,
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
      <h2>
        Checkout - $
        {(getTotalPrice(cart) < 10
          ? getTotalPrice(cart) + 0.5
          : getTotalPrice(cart)
        ).toFixed(2)}
      </h2>
      <CheckoutInput
        name="Name"
        inputType="name"
        value={name}
        updateValue={setName}
      />
      <CheckoutInput
        name="Email"
        inputType="email"
        value={email}
        updateValue={setEmail}
      />
      <CheckoutInput
        name="Address"
        inputType="text"
        value={address}
        updateValue={setAddress}
      />
      <CheckoutInput
        name="City"
        inputType="text"
        value={city}
        updateValue={setCity}
      />
      <CheckoutInput
        name="State"
        inputType="text"
        value={state}
        updateValue={setState}
      />
      <CheckoutInput
        name="Zip Code"
        inputType="text"
        value={zipCode}
        updateValue={setZipCode}
      />
      <CardElement />
      <div className="button-container">
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
      </div>
    </form>
  );
};

export default CheckoutForm;
