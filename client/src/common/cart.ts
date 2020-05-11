import { Dispatch, SetStateAction } from "react";

interface CartItem {
  id: number;
  quantity: number;
}

export const deleteItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number
) => {
  setCart((cart): CartItem[] => cart.filter((item) => item.id !== id));
};

export const addItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number
) => {
  setCart((cart): CartItem[] => [
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
  setCart((cart): CartItem[] =>
    cart.map((item) =>
      item.id === id ? { id: item.id, quantity: item.quantity++ } : item
    )
  );
};
