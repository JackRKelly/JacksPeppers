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
      item.id === id ? { id: item.id, quantity: item.quantity + 1 } : item
    )
  );
};

export const decrementItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number
) => {
  setCart((cart): CartItem[] =>
    cart.map((item) =>
      item.id === id
        ? {
            id: item.id,
            quantity: item.quantity > 1 ? item.quantity-- : item.quantity,
          }
        : item
    )
  );
};

export const updateItem = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number,
  quantity: number
) => {
  setCart((cart): CartItem[] =>
    cart.map((item) =>
      item.id === id
        ? {
            id: item.id,
            quantity: quantity,
          }
        : item
    )
  );
};

export const checkDuplicate = (cart: Array<CartItem>, id: number): boolean => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      return true;
    }
  }
  return false;
};
