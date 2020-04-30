import React from "react";
import { Link } from "react-router-dom";

const Shop: React.FC = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Link to="/product/34">Product 34</Link>
    </div>
  );
};

export default Shop;
