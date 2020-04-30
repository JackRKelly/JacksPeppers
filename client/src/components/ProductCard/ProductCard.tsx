import React from "react";
import { Link } from "react-router-dom";
import Dinero from "dinero.js";
import "./index.scss";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  id: number;
  color: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id, color } = props;
  return (
    <div className="product-card">
      <h1 className="product-card--title" style={{ color: color }}>
        {title}
      </h1>
      <h3 className="product-card--price">
        ${Dinero({ amount: 500 }).getLocale()}
      </h3>
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
