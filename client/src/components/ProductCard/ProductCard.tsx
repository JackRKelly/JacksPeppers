import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  id: number;
}

const ProductCard: React.FC<Props> = (props) => {
  const { title, price, inStock, id } = props;
  return (
    <div className="product-card">
      <h1 className="product-card--title">{title}</h1>
      <h1 className="product-card--price">{price}</h1>
      <h1 className="product-card--availability">{inStock}</h1>
      <Link to={`/product/${id}`}>Go to page</Link>
    </div>
  );
};

export default ProductCard;
