import React, { FC } from "react";
import "./index.scss";

const Cart: FC = () => {
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
