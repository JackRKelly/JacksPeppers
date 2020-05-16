import React, { FC, Dispatch, SetStateAction, useEffect } from "react";
import CartListItem from "../../components/CartListItem/CartListItem";
import { getTotalPrice } from "../../common/cart";
import "./index.scss";

interface CartItem {
  id: string | boolean;
  price: number;
  quantity: number;
}

interface Props {
  cart: Array<CartItem>;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const Cart: FC<Props> = (props) => {
  const { cart, setCart } = props;

  useEffect(() => {
    document.title = "Cart | Jack's Peppers";
  }, []);

  return (
    <main className="cart">
      <header className="hero-section">
        <h1 className="hero-section--title">Your Cart</h1>
      </header>
      <div className="cart-list">
        {cart.length === 0
          ? "Your cart is empty"
          : cart.map((cart, index) => (
              <CartListItem
                id={cart.id}
                quantity={cart.quantity}
                setCart={setCart}
                key={typeof cart.id === "string" ? cart.id : index}
              />
            ))}
      </div>
      <ul className="cart-summary">
        <li className="cart-summary--subtotal">
          Subtotal:{" "}
          {() => {
            getTotalPrice(cart);
          }}
        </li>
        <li className="cart-summary--shipping">Shipping: $0.50</li>
        <li className="cart-summary--total">Total: $5.50</li>
      </ul>
      <button className="cart-checkout">Checkout</button>
    </main>
  );
};

export default Cart;
