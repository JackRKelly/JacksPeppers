import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();

  return (
    <main className="product">
      <h1>Product {id}</h1>
    </main>
  );
};

export default Product;
