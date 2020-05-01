import React from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const Product: React.FC = () => {
  const { id } = useParams();

  document.title = `Pepper Name | Jack's Peppers`;
  console.log(id);

  return (
    <main className="product">
      <h1>Product</h1>
    </main>
  );
};

export default Product;
