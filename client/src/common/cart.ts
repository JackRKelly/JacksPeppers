import { Dispatch, SetStateAction } from "react";

interface CartItem {
  id: number;
  quantity: number;
}

export const deleteItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number
) => {
  setCart((cart) => cart.filter((item) => item.id !== id));
};

export const addItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number
) => {
  setCart((cart) => [
    ...cart,
    {
      id: id,
      quantity: 1,
    },
  ]);
};

export const incrementItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number
) => {
  setCart((cart) =>
    cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    })
  );
};
