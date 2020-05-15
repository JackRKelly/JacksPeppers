import React, {
  useState,
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Link } from "react-router-dom";
import { deleteItem, incrementItem, decrementItem } from "../../common/cart";

interface CartItem {
  id: string | boolean;
  quantity: number;
}

interface Props {
  id: string | boolean;
  quantity: number;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

interface ProductItem {
  colorList: Array<string>;
  description: string;
  heat: number;
  image: string | undefined;
  name: string;
  price: number;
  quantity: number;
  seedCount: number;
  _id: string | boolean;
}

const CartListItem: FC<Props> = (props) => {
  const { id, quantity, setCart } = props;

  const [imagePath, setImagePath] = useState();

  const [product, setProduct] = useState<ProductItem>({
    colorList: ["red"],
    description: "Description",
    heat: 1,
    image: undefined,
    name: "name",
    price: 0,
    quantity: 1,
    seedCount: 0,
    _id: false,
  });

  useEffect((): (() => void | undefined) => {
    let isSubscribed = true;

    fetch(`/api/inventory/${id}`)
      .then((result) => {
        result.json().then((json) => {
          setProduct(json);
          if (isSubscribed && json.image) {
            import(`../../assets/images/${json.image}`).then((image) =>
              setImagePath(image.default)
            );
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div className="cart-list--item">
      <Link to={`product/${product._id}`}>
        <img src={imagePath} alt="" />
        <p>{product.name}</p>
      </Link>
      <button
        onClick={() => {
          incrementItem(setCart, product._id);
        }}
      >
        +
      </button>
      {quantity}
      <button
        onClick={() => {
          decrementItem(setCart, product._id);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          deleteItem(setCart, product._id);
        }}
      >
        Delete
      </button>
      ${product.price.toFixed(2)} ${(product.price * quantity).toFixed(2)}
    </div>
  );
};

export default CartListItem;
