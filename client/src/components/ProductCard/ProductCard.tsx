import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  id: number;
  color: string;
  image?: string;
  invert?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id, color, image, invert } = props;

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
        className="product-card--image"
        style={{ opacity: inStock ? 1 : 0.5 }}
      />
      <h1
        className="product-card--title"
        style={{
          color: invert ? "#333" : color,
        }}
      >
        {title}
      </h1>
      <h4 className="product-card--price">
        ${price.toFixed(2)}
        <span className="product-card--availability">
          {!inStock ? " - Out of stock" : ""}
        </span>
      </h4>
      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{
          backgroundColor: color,
          color: invert ? "#333" : "white",
          boxShadow: invert
            ? "0 0 7px rgba(0, 0, 0, 0.2)"
            : "0 0 7px rgba(0, 0, 0, 0.3)",
        }}
      >
        Details
      </Link>
      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{
          backgroundColor: color,
          color: invert ? "#333" : "white",
          boxShadow: invert
            ? "0 0 7px rgba(0, 0, 0, 0.2)"
            : "0 0 7px rgba(0, 0, 0, 0.3)",
          opacity: inStock ? 1 : 0.5,
        }}
      >
        Add to cart
      </Link>
    </div>
  );
};

export default ProductCard;
