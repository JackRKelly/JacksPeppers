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
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id, color, image } = props;

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
      <h1 className="product-card--title" style={{ color: color }}>
        {title}
      </h1>
      <h3 className="product-card--price">${price.toFixed(2)}</h3>
      <h5 className="product-card--availability">
        {inStock ? "available" : "unavailable"}
      </h5>
      <Link
        className="product-card--link"
        to={`/product/${id}`}
        style={{ backgroundColor: color }}
      >
        Go to page
      </Link>
    </div>
  );
};

export default ProductCard;
