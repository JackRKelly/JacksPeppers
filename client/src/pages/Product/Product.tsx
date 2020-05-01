import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();

  document.title = `Product #${id} | Jack's Peppers`;

  return (
    <main className="product">
      <h1>Product {id}</h1>
    </main>
  );
};

export default Product;
