import React, {
  useState,
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Link } from "react-router-dom";
import {
  deleteItem,
  incrementItem,
  decrementItem,
  CartItem,
  ProductItem,
} from "../../common/cart";

interface Props {
  id: string | boolean;
  quantity: number;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  index: number;
  cartLength: number;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const CartListItem: FC<Props> = (props) => {
  const { id, quantity, setCart, index, cartLength, setIsLoading } = props;

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
          if (index + 1 === cartLength) {
            setIsLoading(false);
          }
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
  }, [id, setIsLoading, index, cartLength]);

  return (
    <tr className="cart-list--table-item">
      <td className="cart-list--table-body--item-product">
        <Link to={`product/${product._id}`}>
          <img src={imagePath} alt="" />
          <p>{product.name}</p>
        </Link>
      </td>
      <td className="cart-list--table-body--item-price">
        ${product.price.toFixed(2)}
      </td>
      <td className="cart-list--table-body--item-quantity">
        <div>
          <div>
            <button
              onClick={() => {
                incrementItem(setCart, product._id);
              }}
            >
              +
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => {
                decrementItem(setCart, product._id);
              }}
            >
              -
            </button>
          </div>
          <button
            onClick={() => {
              deleteItem(setCart, product._id);
            }}
          >
            Remove
          </button>
        </div>
      </td>
      <td className="cart-list--table-body--item-total">
        ${(product.price * quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartListItem;
