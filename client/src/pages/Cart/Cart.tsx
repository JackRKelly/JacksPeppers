import React, { FC, Dispatch, SetStateAction } from "react";
import "./index.scss";

interface Props {
  cart: Array<object>;
  setCart: Dispatch<SetStateAction<{}[]>>;
}

const Cart: FC<Props> = (props) => {
  document.title = "Cart | Jack's Peppers";

  return (
    <main className="cart">
      <header className="hero-section">
        <h1 className="hero-section--title">Your Cart</h1>
      </header>
    </main>
  );
};

export default Cart;
