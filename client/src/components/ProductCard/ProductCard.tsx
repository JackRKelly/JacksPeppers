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
        ${price.toFixed(2)} -{" "}
        <span
          className="product-card--availability"
          style={{ color: inStock ? "green" : "red" }}
        >
          {inStock ? "In stock" : "Out of stock"}
        </span>
      </h4>
      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{ backgroundColor: color, color: invert ? "#333" : "white" }}
      >
        Details
      </Link>
      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{ backgroundColor: color, color: invert ? "#333" : "white" }}
      >
        Add to cart
      </Link>
    </div>
  );
};

export default ProductCard;
