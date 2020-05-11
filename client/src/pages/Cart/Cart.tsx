import React, { FC, Dispatch, SetStateAction } from "react";
import { deleteItem, addItem, incrementItem } from "../../common/cart";
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
            {cart.id} + {cart.quantity}{" "}
            <button
              onClick={() => {
                incrementItem(setCart, cart.id);
              }}
            >
              Increment
            </button>
            <button
              onClick={() => {
                deleteItem(setCart, cart.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            addItem(setCart, Math.floor(Math.random() * 100));
          }}
        >
          Add random item
        </button>
      </header>
    </main>
  );
};

export default Cart;
