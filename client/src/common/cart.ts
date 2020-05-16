import { Dispatch, SetStateAction } from "react";

interface CartItem {
  id: string | boolean;
  price: number;
  quantity: number;
}

export const deleteItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: string | boolean
) => {
  setCart((cart): CartItem[] => cart.filter((item) => item.id !== id));
};

export const addItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: string | boolean,
  price: number
) => {
  setCart((cart): CartItem[] => [
    ...cart,
    {
      id: id,
      quantity: 1,
      price: price,
    },
  ]);
};

export const countCart = (cart: Array<CartItem>): number => {
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    count += cart[i].quantity;
  }
  return count;
};

export const incrementItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: string | boolean
) => {
  setCart((cart): CartItem[] =>
    cart.map((item) =>
      item.id === id
        ? { id: item.id, quantity: item.quantity + 1, price: item.price }
        : item
    )
  );
};

export const decrementItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: string | boolean
) => {
  setCart((cart): CartItem[] =>
    cart.map((item) =>
      item.id === id
        ? {
            id: item.id,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            price: item.price,
          }
        : item
    )
  );
};

export const checkDuplicate = (
  cart: Array<CartItem>,
  id: string | boolean
): boolean => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return true;
    }
  }
  return false;
};

export const getTotalPrice = (cart: Array<CartItem>): number => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  console.log(total);
  return total;
};
