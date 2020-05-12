import React, {
  useState,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useParams } from "react-router-dom";
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

const Product: FC<Props> = (props) => {
  const { id } = useParams();
  const { cart, setCart } = props;
  const [imagePath, setImagePath] = useState();

  useEffect(() => {
    document.title = `Pepper Name | Jack's Peppers`;
  });

  const pepper = {
    title: "Sugar Rush Red",
    price: 2.5,
    seedCount: 10,
    inStock: true,
    heat: 1,
    catagory: ["Sugar Rush"],
    colorList: [ColorKind.Red, ColorKind.Orange],
    image: "sugar-red.jpg",
    description:
      "Gnarly long tails from these F4 peppers. Jays Peach Ghostscorpion X Reaper. Tyler Farms created the California Reaper. I received these before they were  named. I've put 3 generations on them with another growing. They might be a slightly different shape, than the original. Brutaly hot! Expect shape variability.",
  };

  if (pepper.image) {
    import(`../../assets/images/${pepper.image}`).then((image) =>
      setImagePath(image.default)
    );
  }

  return (
    <main className="product">
      <div className="product-info">
        <div className="product-info--preview">
          <div className="product-info--preview-main">
            <img
              src={imagePath}
              alt={`${pepper.title} Pepper.`}
              title={`${pepper.title} Pepper.`}
            />
          </div>
          <ul className="product-info--preview-list">
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
            <li className="product-info--preview-list--item">
              <img
                src={imagePath}
                alt={`${pepper.title} Pepper.`}
                title={`${pepper.title} Pepper.`}
              />
            </li>
          </ul>
        </div>
        <div className="product-info--main">
          <h1 className="product-info--main-title">{pepper.title}</h1>
          <h3 className="product-info--main-price">
            ${pepper.price.toFixed(2)} - {pepper.seedCount}+ Seeds -{" "}
            <span style={{ color: heatSwitchColor(pepper.heat) }}>
              {heatSwitch(pepper.heat)} Pepper
            </span>
          </h3>
          <h3 className="product-info--main-details">Item #{id}</h3>
          <p className="product-info--main-description">{pepper.description}</p>
          <button
            className="product-info--main-add"
            onClick={() => {
              addItem(setCart, id);
            }}
            style={{
              backgroundColor: checkDuplicate(cart, id) ? "gray" : "auto",
              pointerEvents: checkDuplicate(cart, id) ? "none" : "auto",
            }}
          >
            {checkDuplicate(cart, id) ? "In cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
