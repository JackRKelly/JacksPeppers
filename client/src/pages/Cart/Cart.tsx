import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import CartListItem from "../../components/CartListItem/CartListItem";
import "./index.scss";
import CartSummary from "../../components/CartSummary/CartSummary";
import { CartItem } from "../../common/cart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

interface Props {
  cart: Array<CartItem>;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Cart: FC<Props> = (props) => {
  const { cart, setCart, setIsLoading } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const stripePromise = loadStripe(
    "pk_test_U4qeTnEMoRXkfNUbF4SIyuqH00FpW8c4r2"
  );

  useEffect(() => {
    setIsLoading(true);
    document.title = "Cart | Jack's Peppers";
  }, [setIsLoading]);

  useEffect(() => {
    if (cart.length === 0) {
      setIsLoading(false);
    }
  }, [cart, setIsLoading]);

  return (
    <>
      <div
        className="checkout-modal"
        style={{
          opacity: modalOpen ? "1" : "0",
          pointerEvents: modalOpen ? "auto" : "none",
        }}
      >
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} />
        </Elements>
      </div>
      <main className="cart">
        <header className="hero-section">
          <h1 className="hero-section--title">Your Cart</h1>
        </header>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-list">
            <table className="cart-list--table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody className="cart-list--table-body">
                {cart.map((cartItem, index) => (
                  <CartListItem
                    id={cartItem.id}
                    quantity={cartItem.quantity}
                    setCart={setCart}
                    index={index}
                    cartLength={cart.length}
                    setIsLoading={setIsLoading}
                    key={typeof cartItem.id === "string" ? cartItem.id : index}
                  />
                ))}
              </tbody>
            </table>
            <CartSummary cart={cart} />
            <button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
