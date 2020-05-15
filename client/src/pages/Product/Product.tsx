import React, {
  useState,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useParams, Link } from "react-router-dom";
import { ColorKind } from "../../common/color";
import { heatSwitch, heatSwitchColor } from "../../common/heat";
import "./index.scss";
import { addItem, checkDuplicate } from "../../common/cart";

interface CartItem {
  id: number;
  quantity: number;
}

interface Props {
  cart: Array<CartItem>;
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

const Product: FC<Props> = (props) => {
  const { id } = useParams();
  const { cart, setCart } = props;
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
    document.title = `Loading... | Jack's Peppers`;
    let isSubscribed = true;

    fetch(`/api/inventory/${id}`)
      .then((result) => {
        result.json().then((json) => {
          console.log(json);
          setProduct(json);
          if (isSubscribed && json.image) {
            import(`../../assets/images/${json.image}`).then((image) =>
              setImagePath(image.default)
            );
          }
          document.title = `${json.name} Pepper | Jack's Peppers`;
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
    <main className="product">
      {!product._id ? (
        <div className="product-error">
          <h1 className="product-error--title">Product not found</h1>
          <p className="product-error--description">
            The product you are searching for does not exist.
          </p>
          <Link to="/shop">Shop</Link>
        </div>
      ) : (
        <div className="product-info">
          <div className="product-info--preview">
            <div className="product-info--preview-main">
              <img
                src={imagePath}
                alt={`${product.name} product.`}
                title={`${product.name} product.`}
              />
            </div>
            <ul className="product-info--preview-list">
              <li className="product-info--preview-list--item">
                <img
                  src={imagePath}
                  alt={`${product.name} product.`}
                  title={`${product.name} product.`}
                />
              </li>
              <li className="product-info--preview-list--item">
                <img
                  src={imagePath}
                  alt={`${product.name} product.`}
                  title={`${product.name} product.`}
                />
              </li>
              <li className="product-info--preview-list--item">
                <img
                  src={imagePath}
                  alt={`${product.name} product.`}
                  title={`${product.name} product.`}
                />
              </li>
              <li className="product-info--preview-list--item">
                <img
                  src={imagePath}
                  alt={`${product.name} product.`}
                  title={`${product.name} product.`}
                />
              </li>
            </ul>
          </div>
          <div className="product-info--main">
            <h1 className="product-info--main-title">{product.name}</h1>
            <h3 className="product-info--main-price">
              ${product.price.toFixed(2)} - {product.seedCount}+ Seeds -{" "}
              <span style={{ color: heatSwitchColor(product.heat) }}>
                {heatSwitch(product.heat)} Pepper
              </span>
            </h3>
            <p className="product-info--main-description">
              {product.description}
            </p>
            <button
              className="product-info--main-add"
              onClick={() => {
                addItem(setCart, id);
              }}
              style={{
                backgroundColor:
                  product.quantity === 0
                    ? "gray"
                    : checkDuplicate(cart, id)
                    ? "gray"
                    : "auto",
                pointerEvents:
                  product.quantity === 0
                    ? "none"
                    : checkDuplicate(cart, id)
                    ? "none"
                    : "auto",
              }}
            >
              {product.quantity === 0
                ? "Out of stock"
                : checkDuplicate(cart, id)
                ? "In cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Product;
