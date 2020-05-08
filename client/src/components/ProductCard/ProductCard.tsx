import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorTag from "../ColorTag/ColorTag";
import "./index.scss";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  id: number;
  colorList: Array<string>;
  image?: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id, colorList, image } = props;

  const [imagePath, setImagePath] = useState();

  if (image) {
    import(`../../assets/images/${image}`).then((image) =>
      setImagePath(image.default)
    );
  }

  return (
    <div className="product-card">
      <img
        src={imagePath}
        alt={`${title} Pepper.`}
        title={`${title} Pepper.`}
        className="product-card--image"
        style={{ opacity: inStock ? 1 : 0.5 }}
      />
      <h1 className="product-card--title">
        {title}{" "}
        <span className="product-card--price">- ${price.toFixed(2)}</span>
      </h1>
      <div className="product-card--tags">
        <span className="product-card--availability">
          {!inStock ? "Out of stock" : ""}
        </span>
        {colorList.map((color) => (
          <ColorTag color={color} />
        ))}
      </div>

      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{
          backgroundColor: colorList[0].split("|")[1],
          // color: invert ? "#333" : "white",
          // boxShadow: invert
          //   ? "0 0 7px rgba(0, 0, 0, 0.2)"
          //   : "0 0 7px rgba(0, 0, 0, 0.3)",
        }}
      >
        Details
      </Link>
      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{
          backgroundColor: colorList[0].split("|")[1],
          // color: invert ? "#333" : "white",
          // boxShadow: invert
          //   ? "0 0 7px rgba(0, 0, 0, 0.2)"
          //   : "0 0 7px rgba(0, 0, 0, 0.3)",
          // opacity: inStock ? 1 : 0.5,
          // pointerEvents: inStock ? "auto" : "none",
        }}
      >
        Add to cart
      </Link>
    </div>
  );
};

export default ProductCard;
