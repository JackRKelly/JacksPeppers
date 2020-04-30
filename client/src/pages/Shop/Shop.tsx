import React from "react";
import { Link } from "react-router-dom";

const Shop: React.FC = () => {
  return (
    <main className="shop">
      <h1>Shop</h1>
      <Link to="/product/34">Product 34</Link>
    </main>
  );
};

export default Shop;
