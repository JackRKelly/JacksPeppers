import React, { FC, useEffect, useState } from "react";

import { getTotalPrice, CartItem } from "../../common/cart";

interface Props {
  cart: Array<CartItem>;
}

const CartSummary: FC<Props> = (props) => {
  const { cart } = props;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotalPrice(cart));
  }, [cart]);

  return (
    <ul className="cart-summary">
      <li className="cart-summary--subtotal">Subtotal: ${total.toFixed(2)}</li>
      <li className="cart-summary--shipping">
        Shipping: ${(total < 10 ? 0.5 : 0).toFixed(2)}
      </li>

      <li className="cart-summary--total">
        Total: ${(total < 10 ? total + 0.5 : total).toFixed(2)}
      </li>
    </ul>
  );
};

export default CartSummary;
