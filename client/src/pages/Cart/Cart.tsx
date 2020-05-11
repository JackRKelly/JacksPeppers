import React, { FC, Dispatch, SetStateAction } from "react";
import "./index.scss";

interface CartItem {
  id: number;
  quantity: number;
}

interface Props {
  cart: Array<CartItem>;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const Cart: FC<Props> = (props) => {
  document.title = "Cart | Jack's Peppers";

  const { cart, setCart } = props;

  return (
    <main className="cart">
      <header className="hero-section">
        <h1 className="hero-section--title">Your Cart</h1>
        {cart.map((cart) => (
          <div>
            {cart.id} + {cart.quantity}
          </div>
        ))}
        <button
          onClick={() => {
            setCart((cart) => [
              ...cart,
              {
                id: Math.floor(Math.random() * 100),
                quantity: Math.floor(Math.random() * 100),
              },
            ]);
          }}
        >
          Add random item
        </button>
      </header>
    </main>
  );
};

export default Cart;
