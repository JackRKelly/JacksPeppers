import React, { FC, Dispatch, SetStateAction, useEffect } from "react";
import CartListItem from "../../components/CartListItem/CartListItem";
import "./index.scss";
import CartSummary from "../../components/CartSummary/CartSummary";

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

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cart.map((cartItem, index) => (
            <CartListItem
              id={cartItem.id}
              quantity={cartItem.quantity}
              setCart={setCart}
              key={typeof cartItem.id === "string" ? cartItem.id : index}
            />
          ))}
          <CartSummary cart={cart} />
          <button className="cart-checkout">Checkout</button>
        </div>
      )}
    </main>
  );
};

export default Cart;
