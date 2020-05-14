import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { deleteItem, incrementItem, decrementItem } from "../../common/cart";
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
  const { cart, setCart } = props;
  const [imagePath, setImagePath] = useState();

  const pepper = {
    title: "Sugar Rush Red",
    price: 2.5,
    seedCount: 10,
    inStock: true,
    heat: 1,
    catagory: ["Sugar Rush"],
    image: "sugar-red.jpg",
    description:
      "Gnarly long tails from these F4 peppers. Jays Peach Ghostscorpion X Reaper. Tyler Farms created the California Reaper. I received these before they were  named. I've put 3 generations on them with another growing. They might be a slightly different shape, than the original. Brutaly hot! Expect shape variability.",
  };

  useEffect((): (() => void | undefined) => {
    document.title = "Cart | Jack's Peppers";
    let isSubscribed = true;

    if (isSubscribed && pepper.image) {
      import(`../../assets/images/${pepper.image}`).then((image) =>
        setImagePath(image.default)
      );
    }

    return () => {
      isSubscribed = false;
    };
  }, [pepper.image, pepper.title]);

  return (
    <main className="cart">
      <header className="hero-section">
        <h1 className="hero-section--title">Your Cart</h1>
      </header>
      <div className="cart-list">
        {cart.length === 0
          ? "Your cart is empty"
          : cart.map((cart, value) => (
              <div className="cart-list--item" key={value}>
                <img src={imagePath} alt="" />
                {pepper.title} (Item #{cart.id})
                <button
                  onClick={() => {
                    incrementItem(setCart, cart.id);
                  }}
                >
                  +
                </button>
                {cart.quantity}
                <button
                  onClick={() => {
                    decrementItem(setCart, cart.id);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    deleteItem(setCart, cart.id);
                  }}
                >
                  Delete
                </button>
                ${pepper.price.toFixed(2)} $
                {(pepper.price * cart.quantity).toFixed(2)}
              </div>
            ))}
      </div>
    </main>
  );
};

export default Cart;
